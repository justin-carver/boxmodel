import { Button, Modal, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const MobileWarning = () => {
	// TODO: Link this with localStorage to save choice for X amount of time.
	const [opened, { close, open }] = useDisclosure(true);
	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				size="sm"
				withCloseButton={false}
				shadow={'lg'}
				withFocusReturn
				centered>
				<Stack>
					<Text size={'lg'}>Screen Too Small! 📱</Text>
					<Text size={'md'}>
						Hey there! 👋 <br />
						Thanks so much for taking the time to stop by.
						Unfortunately at this time, the website is designed for
						screens much larger than this one. 😢
						<br />
						<br />
						Functionality may or may not work correctly. Please join
						us again from the desktop version to learn more about
						the CSS Box Model!
					</Text>
					<Button onClick={close} color={'dark.4'}>
						Don't Remind Again
					</Button>
				</Stack>
			</Modal>
		</>
	);
};

export default MobileWarning;
