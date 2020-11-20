import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';
export const ColorPicker = styled.div`
    width: ${({ checked }) => (checked == true ? '12px' : '25px')};
    height: ${({ checked }) => (checked == true ? '12px' : '25px')};
    border-radius: 50%;
    background-color: ${({ checked }) =>
        checked == true ? Colors.primary : Colors.secondary};
    border: ${({ checked }) =>
        checked == true ? `6.5px solid ${Colors.secondary}` : 'none'};
    transition: background-color 0.2s ease-in-out 0s;
`;
