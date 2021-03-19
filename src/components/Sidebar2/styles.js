import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';
import {
    ShadowSecondary,
    TransitionSecondary,
} from '../../assets/css/shared-styles';

export const Sidebar = styled.div`
    height: 100%;
    width: 260px;
    z-index: 99;
    left: ${({ left }) => (left ? left : 0)};
    position: fixed;
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
`;

export const Hr = styled.hr`
    border: solid 1px ${Colors.hover};
`;
