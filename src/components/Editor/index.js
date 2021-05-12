import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import EditorJS from '@editorjs/editorjs';
import edjsHTML from 'editorjs-html';
import { useEditorTools } from './useEditorTools';
import {
    customQuoteBlock,
    customImageBlock,
    customFileBlock,
} from './customBlocks';
import { urlify } from './editor-helpers';
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

export const Editor = ({
    id = 'editor',
    initData,
    setEditing,
    onSave,
    buttonSaveText = 'Save',
    placeholder = 'Write a description...',
    mentionItems = [],
    externalDataConf = {},
}) => {
    console.log('editor here', initData);
    const [editor, setEditor] = useState(null);

    const {
        setMentionsConfig,
        setExternalDataConf,
        setEditorConfig,
    } = useEditorTools(setEditor);

    useEffect(() => {
        setMentionsConfig({
            items: mentionItems,
            editorId: id,
        });

        setExternalDataConf(externalDataConf);

        setEditorConfig({
            holder: id,
            data: initData ? initData : defaultEditorData,
            placeholder: placeholder,
            autofocus: true,
            logLevel: 'WARN',
        });
    }, []);

    const parseToHTMl = (outputData) => {
        const edjsParser = edjsHTML({
            quote: customQuoteBlock,
            image: customImageBlock,
            attaches: customFileBlock,
        });
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
                let outputHtmlString = urlify(outputHtml.outerHTML);
                onSave(outputHtmlString, outputData);
            })
            .catch((error) => {
                console.log('Saving failed: ', error);
            });
    }, [editor]);

    return (
        <>
            <EditorStyle />
            <div
                id={id}
                style={{ marginTop: '0.5em', position: 'relative' }}
            ></div>
            <div className="ButtonsContainer">
                <Button
                    onClick={() => handleClick()}
                    margin="1em 0"
                    padding="6px 24px"
                >
                    {buttonSaveText}
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
    id: PropTypes.string,
    initData: PropTypes.object,
    setEditing: PropTypes.func,
    onSave: PropTypes.func,
    buttonSaveText: PropTypes.string,
    placeholder: PropTypes.string,
    mentionItems: PropTypes.array,
    externalDataConf: PropTypes.object,
};
