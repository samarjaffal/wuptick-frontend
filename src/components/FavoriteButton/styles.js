import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const inactiveColor = Colors.softGray;

export const Star = styled(FontAwesomeIcon).attrs(({ color }) => ({
    style: {
        color: color ? color : inactiveColor,
    },
}))`
    cursor: pointer;
`;
