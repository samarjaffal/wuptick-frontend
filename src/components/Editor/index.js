import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import EditorJS from '@editorjs/editorjs';
import edjsHTML from 'editorjs-html';
import { EDITORCONF } from './editor-conf';
import { customQuoteBlock } from './customBlocks';
import { Button } from '../SharedComponents/styles';
import { EditorStyle } from '../../assets/css/EditorStyle';
import { Colors } from '../../assets/css/colors';

const defaultEditorData = {
    blocks: [
        {
            type: 'paragraph',
            data: {
                text: '',
            },
        },
    ],
};

export const Editor = ({ initData, setEditing, onSave }) => {
    console.log('editor here', initData);

    const editor = new EditorJS({
        ...EDITORCONF,
        data: initData ? initData : defaultEditorData,
    });

    const parseToHTMl = (outputData) => {
        const edjsParser = edjsHTML({ quote: customQuoteBlock });
        let html = edjsParser.parse(outputData);
        let output = document.createElement('div');
        output.className = 'custom-task-description';
        html.forEach((element) => {
            output.innerHTML += element;
        });
        return output;
    };

    const handleClick = useCallback(() => {
        editor
            .save()
            .then((outputData) => {
                let outputHtml = parseToHTMl(outputData);
                onSave(outputHtml.outerHTML, outputData);
            })
            .catch((error) => {
                console.log('Saving failed: ', error);
            });
    }, []);

    useEffect(() => {
        return () => {
            if (editor) {
                editor.destroy();
            }
        };
    }, []);

    return (
        <>
            <EditorStyle />
            <div id="editor" style={{ marginTop: '0.5em' }}></div>
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
    initData: PropTypes.object,
    setEditing: PropTypes.func,
    onSave: PropTypes.func,
};
