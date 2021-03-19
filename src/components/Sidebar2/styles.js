import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';
import {
    ShadowSecondary,
    TransitionSecondary,
} from '../../assets/css/shared-styles';

export const Sidebar = styled.div`
    height: 100%;
    width: 260px;
    left: ${({ left }) => (left ? left : 0)};
    position: fixed;
    left: 0;
    overflow: hidden;
    ${TransitionSecondary};
    background-color: ${Colors.backgroud};
    ${ShadowSecondary}
    box-shadow: 0px 0px 4px ${Colors.softGray};
`;

export const Ul = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    @media (max-width: 767px) {
        width: 100vw;
        padding: 2em;
    }
`;

export const Hr = styled.hr`
    border: solid 1px ${Colors.hover};
`;
