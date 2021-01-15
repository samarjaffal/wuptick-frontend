import ImageTool from '@editorjs/image';
const Header = require('@editorjs/header');
import List from '@editorjs/list';
const Quote = require('@editorjs/quote');

export const EDITORCONF = {
    holder: 'editor',
    tools: {
        image: {
            class: ImageTool,
            config: {
                endpoints: {
                    byFile: 'http://localhost:8080/uploadFile', // Your backend file uploader endpoint
                    byUrl: 'http://localhost:8080/fetchUrl', // Your endpoint that provides uploading by Url
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
