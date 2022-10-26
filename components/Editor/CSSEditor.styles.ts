import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
	editor: {
		display: 'block',
		backgroundColor: theme.colors.dark[8],
		borderRadius: '10px',
		margin: '30px 0 0 0',
		width: '80%',
		maxWidth: '600px',
		minHeight: 'fit-content',
	},
}));
