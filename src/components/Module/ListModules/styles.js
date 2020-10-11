import styled from 'styled-components';
import { Colors } from '../../../assets/css/colors';
import { borderRadius } from '../../../assets/css/theme';

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 1.5em;
    position: relative;
`;

export const Placeholder = styled.div`
    position: absolute;
    border-radius: ${borderRadius};
    background-color: ${Colors.hover};
    opacity: ${({ isDragging }) => (isDragging == true ? 0.6 : 1)};
    transition: opacity 0.5s ease 0s;
    top: ${({ top }) => (top ? `${top}px` : '0')};
    left: ${({ left }) => (left ? `${left}px` : '0')};
    height: ${({ height }) => (height ? `${height}px` : '0')};
    width: ${({ width }) => (width ? `${width}px` : '0')};
`;
