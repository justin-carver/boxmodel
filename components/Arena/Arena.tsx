import parse from 'html-react-parser';
import { useEffect, useState } from 'react';

import { Grid, Group, Stack, Text } from '@mantine/core';

import levels from '../../data/levels.json';
import Block from '../Block/Block';
import useStyles from './Arena.styles';

const Arena = () => {
	const { classes } = useStyles();
	const [blocks, setBlocks] = useState<Array<JSX.Element>>([]);
	const [injectedCSS, setInjectedCSS] = useState<string>('');

	const playerObject = {
		level: 0,
	};

	const generateLevel = (level: number) => {
		// Get the level from the level object.
		switch (level) {
			case 0:
				setBlocks([]); // Reset level blocks
				for (let block of levels[0 as keyof object][
					'blocks'
				] as Array<object>) {
					setBlocks((prevBlocks) => [
						...prevBlocks,
						<Block key={Math.random()} />,
					]);
				}
				break;
			default:
				break;
		}
		// Add props to <Block />
		// Iterate through array depending on level information, create ref, and add it to block list.
	};

	useEffect(() => {
		generateLevel(0);
	}, []);

	return (
		<>
			<Stack>
				<Text
					className={
						classes.header
					}>{`Level ${playerObject.level}!`}</Text>
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
						{/* parse the HTML string with html-react-parse */}
						<Group
							className={classes.instructions}
							align={'flex-start'}>
							{parse(
								levels[playerObject.level as keyof object][
									'instructions'
								]
							)}
						</Group>
					</Grid.Col>
					<Grid.Col sm={6} xs={3}>
						<Group className={classes.arena}>
							<Group>{blocks.map((block) => block)}</Group>
						</Group>
					</Grid.Col>
				</Grid>
			</Stack>
		</>
	);
};

export default Arena;
