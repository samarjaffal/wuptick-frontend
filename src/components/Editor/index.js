import React from 'react';
import PropTypes from 'prop-types';
import EditorJS from '@editorjs/editorjs';
import edjsHTML from 'editorjs-html';
import { EDITORCONF } from './editor-conf';
import { Button } from '../SharedComponents/styles';
import { EditorStyle } from '../../assets/css/EditorStyle';
import { Colors } from '../../assets/css/colors';

export const Editor = ({ data, setEditing }) => {
    console.log('editor here', data);

    const editor = new EditorJS({ ...EDITORCONF, data: data ? data : {} });

    const parseToHTMl = (outputData) => {
        const edjsParser = edjsHTML();
        let html = edjsParser.parse(outputData);
        let output = document.createElement('div');
        /* output.innerHTML = ''; */
        html.forEach((element) => {
            output.innerHTML += element;
        });
        return output;
    };

    const handleClick = () => {
        editor
            .save()
            .then((outputData) => {
                console.log('Article data: ', outputData);
                let outputHtml = parseToHTMl(outputData);
                console.log(outputHtml, 'html result');
                //TODO: save outputHtml to DB.
            })
            .catch((error) => {
                console.log('Saving failed: ', error);
            });
    };

    return (
        <>
            <EditorStyle />
            <div id="editor" style={{ marginTop: '0.5em' }}></div>
            {/* <div id="output"></div> */}
            <div className="ButtonsContainer">
                <Button
                    onClick={() => handleClick()}
                    margin="1em 0"
                    padding="6px 24px"
                >
                    Save
                </Button>
                <Button
                    bg={Colors.backgroud}
                    margin="1em 0 1em 0.5em"
                    padding="6px 24px"
                    color={Colors.black}
                    onClick={() => setEditing(false)}
                >
                    Cancel
                </Button>
            </div>
        </>
    );
};

Editor.propTypes = {
    data: PropTypes.object,
};
