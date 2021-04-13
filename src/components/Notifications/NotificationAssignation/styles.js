import styled from 'styled-components';
import { Colors } from '../../../assets/css/colors';
import { description, bold } from '../../../assets/css/theme';

export const NotificationDescription = styled.p`
    color: ${Colors.black};
    ${description};
    font-weight: 400;
    margin: 0;
    margin-left: 10px;
    margin-right: 0.5em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
    -webkit-box-orient: vertical;
    cursor: pointer;
`;

export const NotificationType = styled.span`
    ${description};
    font-weight: ${bold};
`;

export const GoToNotification = styled.div`
    text-decoration: none;
    :hover {
        text-decoration: underline;
    }
`;
