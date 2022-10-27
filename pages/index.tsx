import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';

import Arena from '../components/Arena/Arena';
import CSSEditor from '../components/Editor/CSSEditor';
import MobileWarning from '../components/MobileWarning/MobileWarning';

const HomePage = () => {
	const matches = useMediaQuery('(min-width: 370px)');
	const [code, setCode] = useState<string>(`#waldorf {
		margin: 25px;
		background-color: rgb(240,240,240);
		font-family: arial, sans-serif;
		font-size: 14px;
	}`);

	const updateCode = (code: string) => {
		setCode(code);
	};

	return (
		<>
			{matches ? null : <MobileWarning />}
			<Arena codePassthrough={code} />
			<CSSEditor updateCode={updateCode} />
		</>
	);
};

export default HomePage;
