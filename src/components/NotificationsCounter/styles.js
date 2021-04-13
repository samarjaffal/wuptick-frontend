import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';

export const Circle = styled.div`
    width: ${({ size }) => (size ? size : 22)}px;
    height: ${({ size }) => (size ? size : 22)}px;
    background-color: ${Colors.primary};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : 12)}px;
    color: ${Colors.whitePrimary};
    font-weight: 600;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.8em;
`;
