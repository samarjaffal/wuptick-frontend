import styled from 'styled-components';
import CommentIcon from '../../../assets/images/task-icons/comment-icon.svg';
import { Colors } from '../../../assets/css/colors';
import { title, info } from '../../../assets/css/theme';

export const RepliesDiv = styled.div`
    width: 100%;
    margin: 1em 0;
`;

export const Hr = styled.hr`
    border: solid 1px ${Colors.hover};
    opacity: 0.6;
`;

export const Icon = styled(CommentIcon)`
    fill: ${Colors.blue};
`;

export const ReplySectionTitle = styled.div`
    ${title};
    font-size: 18px;
`;

export const NoComments = styled.p`
    ${info};
    font-size: 14px;
    margin-bottom: 0.5em;
`;

export const Container = styled.div`
    padding-left: 40px;
    position: relative;

    @media (max-width: 425px) {
        padding-left: 0;
    }
`;
