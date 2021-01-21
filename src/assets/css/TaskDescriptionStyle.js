import { createGlobalStyle } from 'styled-components';
import { Colors } from './colors';

export const TaskDescriptionStyle = createGlobalStyle`
     .custom-task-description blockquote{
        background: ${Colors.backgroud};
        margin: 30px 0;
        padding: 30px;
        min-height:unset;
        box-shadow:none;
        border:none;
        border-radius: 3px;
        border-left: 5px solid ${Colors.hover};
        margin:0;
    }

    .custom-task-description p,ul,li,span,div,blockquote{
        font-size: 14px;
    }

    .custom-task-description li {
        padding: 4px 0;
    }

    .custom-task-description img{
        max-width:100%;
    }
`;
