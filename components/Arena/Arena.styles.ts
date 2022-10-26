import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
	arena: {
		width: '100%',
	},
	header: {
		fontSize: '42px',
		margin: '40px auto 0 auto',
	},
	instructions: {
		width: '100%',
		padding: '0 20px 0 20px',
		borderRadius: '10px',
		backgroundColor: theme.colors.dark[7],
		height: '100%',
	},
	instructionHeader: {
		fontSize: '20px',
	},
	subheader: {
		fontSize: '30px',
		margin: 'auto auto 20px auto',
	},
	wrapper: {
		backgroundColor: theme.colors.dark[8],
		borderRadius: '10px',
		margin: '10px auto',
		minHeight: '600px',
		width: '80%',
		border: `1px solid ${theme.colors.dark[5]}`,
	},
}));
