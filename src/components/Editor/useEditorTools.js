import { useState, useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import ImageTool from '@editorjs/image';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import Paragraph from './plugins/custom-paragraph/index.js';
import AttachesTool from './plugins/custom-attaches';
import {
    Mention,
    setEditorId,
} from './plugins/custom-mention/custom-mention.js';
import './plugins/custom-mention/custom-mention.css';
import { uploadImageEditor } from '../../requests/uploadImageEditor';

export const useEditorTools = (setEditorData) => {
    const [mentionsConfig] = useState({});
    const [externalDataConf, setExternalDataConf] = useState({});
    const [editorConfig, setEditorConfig] = useState({});
    let editor;

    useEffect(() => {
        if (Object.keys(editorConfig).length) {
            editor = new EditorJS({ ...editorConfig, tools });
            setEditorData(editor);
        }
        return () => {
            if (editor) {
                editor.destroy();
            }
        };
    }, [editorConfig]);

    const setMentionsConfig = (config) => {
        setEditorId(config.editorId);
        mentionsConfig.items = config.items;
        mentionsConfig.editorId = config.editorId;
    };

    const tools = {
        paragraph: {
            class: Paragraph,
            inlineToolbar: true,
            config: mentionsConfig,
        },
        mention: {
            class: Mention,
        },
        image: {
            class: ImageTool,
            config: {
                uploader: {
                    /**
                     * Upload file to the server and return an uploaded image data
                     * @param {File} file - file selected from the device or pasted by drag-n-drop
                     * @return {Promise.<{success, file: {url}}>}
                     */
                    uploadByFile(file) {
                        return uploadImageEditor(file, externalDataConf);
                    },

                    /**
                     * Send URL-string to the server. Backend should load image by this URL and return an uploaded image data
                     * @param {string} url - pasted image URL
                     * @return {Promise.<{success, file: {url}}>}
                     */
                    uploadByUrl(url) {
                        return uploadImageEditor(url);
                    },
                },
            },
        },
        header: {
            class: Header,
            shortcut: 'CMD+SHIFT+H',
            config: {
                placeholder: 'Enter a header',
                levels: [2, 3],
                defaultLevel: 3,
            },
        },
        list: {
            class: List,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+L',
        },
        quote: {
            class: Quote,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+O',
            config: {
                quotePlaceholder: 'Enter a quote',
                captionPlaceholder: "Quote's author",
            },
        },

        attaches: {
            class: AttachesTool,
            config: {
                endpoint: `http://localhost:27017/upload_editor_file`,
                additionalRequestData: {
                    data: JSON.stringify({
                        ...externalDataConf,
                        additional_params: JSON.stringify({
                            ...externalDataConf.additional_params,
                            type: 'file',
                        }),
                    }),
                },
            },
        },
    };

    return {
        setMentionsConfig,
        setExternalDataConf,
        editor,
        setEditorConfig,
    };
};
