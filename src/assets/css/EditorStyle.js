import { createGlobalStyle } from 'styled-components';
import { Colors } from './colors';
import { borderRadius } from './theme';

export const EditorStyle = createGlobalStyle`
    .codex-editor__redactor{
        padding-bottom: 0 !important;
    }

    .codex-editor{
        border: 1px solid ${Colors.backgroud};
        border-radius: ${borderRadius};
        padding: 1em;
    }
    .codex-editor--narrow .ce-toolbar__actions{
        right: 5px;
    }

    .codex-editor--narrow .codex-editor__redactor{
        margin-right: 0 !important;
    }

    .ce-paragraph{
        font-size:14px;
    }

    .ce-header{
        padding-top:0;
        padding-bottom:1em;
    }

    .cdx-list__item{
        font-size:14px;
    }

    .cdx-list{
        padding-top:0;
    }


    .cdx-quote__text, .cdx-quote__caption {
        background: #F9FAFF;
        margin: 30px 0;
        padding: 30px;
        font-size: 14px;
        min-height:unset;
        box-shadow:none;
        border:none;
        border-radius: 3px;
        border-left: 5px solid #EDF0FF;
        margin:0;
    }

    .cdx-quote__caption{
        padding:10px;
        border-top-left-radius:0px;
        display:none;
    }

    .cdx-quote__text{
        border-bottom-left-radius:0px;
    }
`;
