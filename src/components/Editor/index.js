import React from 'react';
import PropTypes from 'prop-types';
import EditorJS from '@editorjs/editorjs';
import { EDITORCONF } from './editor-conf';
import { EditorStyle } from '../../assets/css/EditorStyle';

export const Editor = () => {
    const editor = new EditorJS({ ...EDITORCONF });
    return (
        <>
            <EditorStyle />
            <div id="editor"></div>
            <button onClick={() => console.log('here')}>Check Data</button>
        </>
    );
};

Editor.propTypes = {};
