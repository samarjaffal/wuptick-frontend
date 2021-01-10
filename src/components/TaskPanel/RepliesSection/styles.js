import styled from 'styled-components';
import CommentIcon from '../../../assets/images/task-icons/comment-icon.svg';
import { Colors } from '../../../assets/css/colors';
import { title } from '../../../assets/css/theme';

export const RepliesDiv = styled.div`
    width: 100%;
    margin: 1em 0;
`;

export const Hr = styled.hr`
    border: solid 1px ${Colors.hover};
    opacity: 0.6;
`;

export const CommentIconSVG = styled(CommentIcon)`
    fill: ${Colors.blue};
`;

export const CommentSectionTitle = styled.div`
    ${title};
    font-size: 16px;
    margin-left: 0.5em;
`;
