import React from 'react';
import PropTypes from 'prop-types';
import EditorJS from '@editorjs/editorjs';
import edjsHTML from 'editorjs-html';
import { EDITORCONF } from './editor-conf';
import { EditorStyle } from '../../assets/css/EditorStyle';

export const Editor = () => {
    const editor = new EditorJS({ ...EDITORCONF });
    const output = document.getElementById('output');

    const parseToHTMl = (outputData) => {
        const edjsParser = edjsHTML();
        let html = edjsParser.parse(outputData);
        console.log(html, 'html');
        output.innerHTML = '';
        html.forEach((element) => {
            output.innerHTML += element;
        });
    };
    const handleClick = () => {
        editor
            .save()
            .then((outputData) => {
                console.log('Article data: ', outputData);
                /* parseToHTMl(outputData); */
            })
            .catch((error) => {
                console.log('Saving failed: ', error);
            });
    };

    return (
        <>
            <EditorStyle />
            <div id="editor"></div>
            <div id="output"></div>
            <button onClick={() => handleClick()}>Check Data</button>
        </>
    );
};

Editor.propTypes = {};
