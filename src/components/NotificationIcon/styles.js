import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../assets/css/colors';

export const NewNotification = styled(FontAwesomeIcon)`
    font-size: 10px;
    margin-right: 1em;
    color: ${(color) => (color ? color : Colors.green)};
    animation-name: twinkle;
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
`;
