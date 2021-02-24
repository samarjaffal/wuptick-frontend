import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../assets/css/colors';

export const TaskCheckStyled = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const PlainCheckIcon = styled(FontAwesomeIcon)`
    font-size: 18px;
    color: ${({ color }) => (color ? color : Colors.softGray)};
`;
