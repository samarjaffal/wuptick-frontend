import styled from 'styled-components';
import { Colors } from '../../../assets/css/colors';

export const RemoveButton = styled.div`
    font-size: 12px;
    display: none;
    cursor: pointer;
    display: ${({ isHover }) => (isHover ? 'block' : 'none')};
    color: ${({ isHover }) => (isHover ? Colors.red : '')};
`;
