import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../../assets/css/colors';
import ReplyIcon from '../../../assets/images/task-icons/reply-icon.svg';

export const TaskActionsContainer = styled.div`
    display: flex;
    margin-top: 1em;
`;

export const URLTaskIcon = styled(FontAwesomeIcon)`
    font-size: 18px;
    color: ${({ color }) => (color ? color : Colors.softGray)};
`;

export const ReplyIconSVG = styled(ReplyIcon)`
    fill: ${({ color }) => (color ? color : Colors.softGray)};
`;
