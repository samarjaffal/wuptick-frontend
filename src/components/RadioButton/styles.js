import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';

const colorDefault = Colors.secondary;

export const RadioButton = styled.div`
    width: ${({ checked }) => (checked == true ? '12px' : '25px')};
    height: ${({ checked }) => (checked == true ? '12px' : '25px')};
    border-radius: 50%;
    background-color: ${({ checked, color }) =>
        checked == true ? Colors.white : color ? color : Colors.secondary};
    border: ${({ checked, color }) =>
        checked == true
            ? `6.5px solid ${color ? color : colorDefault}`
            : 'none'};
    transition: background-color 0.2s ease-in-out 0s;
    cursor: pointer;
`;
