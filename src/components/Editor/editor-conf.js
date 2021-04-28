import ImageTool from '@editorjs/image';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import Paragraph from './plugins/custom-paragraph/index.js';
import {
    Mention,
    setEditorId,
} from './plugins/custom-mention/custom-mention.js';
import './plugins/custom-mention/custom-mention.css';
import { uploadImageEditor } from '../../requests/uploadImageEditor';

let mentionsConfig = {};
export const setMentionsConfig = (config) => {
    setEditorId(config.editorId);
    mentionsConfig.items = config.items;
    mentionsConfig.editorId = config.editorId;
};

let externalDataConf = {};

export const setExternalDataConf = (data) => {
    externalDataConf = data;
};

export const EDITORCONF = {
    holder: 'editor',
    placeholder: 'Write a description...',
    autofocus: true,
    logLevel: 'WARN',
    tools: {
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
    },
};
