import 'prismjs/themes/prism-okaidia.min.css';

import { highlight, languages } from 'prismjs';
import { useEffect, useState } from 'react';
import Editor from 'react-simple-code-editor';

import { Group } from '@mantine/core';

import useStyles from './CSSEditor.styles';

const CSSEditor = (props: any) => {
	const { classes } = useStyles();
	const [code, setCode] = useState(`#waldorf {
    margin: 25px;
    background-color: rgb(240,240,240);
    font-family: arial, sans-serif;
    font-size: 14px;
}`);

	useEffect(() => {
		props.updateCode(code);
	}, [code]);

	return (
		<Group position="center">
			<Editor
				className={classes.editor}
				value={code}
				onValueChange={(code) => setCode(code)}
				onError={() => console.log('Not Valid CSS')}
				highlight={(code) => highlight(code, languages.css, 'css')}
				padding={30}
				tabSize={4}
				style={{
					fontFamily: '"Fira code", "Fira Mono", monospace',
					fontSize: 14,
				}}
				autoFocus
			/>
		</Group>
	);
};

export default CSSEditor;
