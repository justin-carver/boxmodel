import { useEffect } from 'react';
import { useMediaQuery } from '@mantine/hooks';

import Arena from '../components/Arena/Arena';
import CSSEditor from '../components/Editor/CSSEditor';
import MobileWarning from '../components/MobileWarning/MobileWarning';

const HomePage = () => {
	const matches = useMediaQuery('(min-width: 370px)');
	useEffect(() => {
		console.log(matches);
	}, [matches]);
	return (
		<>
			{matches ? null : <MobileWarning />}
			<Arena />
			<CSSEditor />
		</>
	);
};

export default HomePage;
