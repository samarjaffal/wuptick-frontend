import styled from 'styled-components';
import ReplyIcon from '../../../../assets/images/task-icons/reply-icon.svg';
import { Colors } from '../../../../assets/css/colors';

export const ReplyIconSVG = styled(ReplyIcon)`
    fill: ${({ color }) => (color ? color : Colors.softGray)};
`;
