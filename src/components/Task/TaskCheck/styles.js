import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../../assets/css/colors';

export const TaskCheck = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const Square = styled(FontAwesomeIcon)`
    color: ${Colors.gray};
    ${TaskCheck}:hover & {
        display: none;
    }
`;

export const SquareHover = styled(FontAwesomeIcon)`
    color: ${Colors.gray};
    background-color: ${Colors.hover};
    display: none;

    ${TaskCheck}:hover & {
        display: block;
    }
`;

export const SquareChecked = styled(FontAwesomeIcon)`
    color: ${Colors.green};
`;
