import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';
import { ShadowSecondary } from '../../assets/css/shared-styles';
import { borderRadius } from '../../assets/css/theme';

export const Dropdown = styled.div`
    position: absolute;
    top: ${({ top }) => (top ? top : '40px')};
    width: ${({ width }) => (width ? width : '300px')};
    ${({ transform }) =>
        transform
            ? `transform: translateX(${transform});`
            : `transform: translateX(-45%);`};
    background-color: ${({ bg }) => (bg ? bg : Colors.backgroud)};
    border: 1px solid ${Colors.white};
    border-radius: ${borderRadius};
    padding: ${({ open }) => (open == true ? '14px' : 0)};
    overflow: hidden;
    ${ShadowSecondary};
    opacity: ${({ open }) => (open == true ? 1 : 0)};
    visibility: ${({ open }) => (open == true ? 'visible' : 'hidden')};
    height: ${({ open }) => (open == true ? 'auto' : 0)};
    transition: all 0.1s ease-in-out 0s, height 0.3s ease;
    z-index: 200;

    @media (max-width: 424px) {
        transform: none;
        right: 0;
        top: 30px;
    }
`;
