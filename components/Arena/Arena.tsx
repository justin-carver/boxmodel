import parse from 'html-react-parser';
import { CSSProperties, useEffect, useRef, useState } from 'react';

import { Grid, Group, Stack, Text } from '@mantine/core';

import levels from '../../data/levels.json';
// import { convertCSS, convertToCamelCase } from '../../lib/utils';
import { convert } from '@americanexpress/css-to-js';
import Block from '../Block/Block';
import useStyles from './Arena.styles';

const Arena = (props: any) => {
	const { classes } = useStyles();
	const [arenaCSS, setArenaCSS] = useState<CSSProperties>();
	const [blocks, setBlocks] = useState<Array<JSX.Element>>([]);

	// TODO: This should be saved to localStoage at some point.
	const playerObject = {
		level: 0,
	};

	const generateLevel = (level: number) => {
		setBlocks([]); // Reset level blocks
		for (let block of levels[level as keyof object][
			'blocks'
		] as Array<object>) {
			setBlocks((prevBlocks) => [
				...prevBlocks,
				<Block key={Math.random()} />,
			]);
		}
	};

	useEffect(() => {
		try {
			let convertedCSS = convert(props.codePassthrough);
			setArenaCSS(convertedCSS['$waldorf'] as CSSProperties);
		} catch {
			// Do nothing, CSS will not update.
		}
	}, [props.codePassthrough]);

	useEffect(() => {
		generateLevel(0); // Start
	}, []);

	return (
		<>
			<Stack>
				<Text className={classes.header}>{`LEVEL ${
					playerObject.level + 1
				}!`}</Text>
				<Text className={classes.subheader}>
					Blocks, Widths, & Heights
				</Text>
				<Grid
					gutter={40}
					className={classes.wrapper}
					align="stretch"
					justify={'flex-start'}
					grow>
					<Grid.Col sm={6} xs={3}>
						<Group
							className={classes.instructions}
							align={'flex-start'}>
							{/* parse the HTML string with html-react-parse */}
							{parse(
								levels[playerObject.level as keyof object][
									'instructions'
								]
							)}
						</Group>
					</Grid.Col>
					<Grid.Col sm={6} xs={3}>
						<Group
							style={arenaCSS}
							className={`${classes.arena} cssInjectionPoint`}>
							<Group>{blocks.map((block) => block)}</Group>
						</Group>
					</Grid.Col>
				</Grid>
			</Stack>
		</>
	);
};

export default Arena;
