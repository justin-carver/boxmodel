import { motion } from 'framer-motion';

import { Center, Text } from '@mantine/core';

import useStyle from './Block.styles';

const Block = (props: any) => {
	const { classes } = useStyle();
	return (
		<motion.div
			// ref={}
			className={`${classes.object} block`}
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}>
			<Center className={classes.center}>
				<Text size="lg">#waldorf</Text>
			</Center>
		</motion.div>
	);
};

export default Block;
