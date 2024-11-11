import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import '../assets/css/jodit.css';

export default function Editor({ placeholder }){
	const editor = useRef(null);
	const [content, setContent] = useState('');

	const config ={
        width: 850,
        height: 400,
        theme: 'dark'
    }

	return (
		<JoditEditor
			ref={editor}
			value={content}
			config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
		/>
	);
};