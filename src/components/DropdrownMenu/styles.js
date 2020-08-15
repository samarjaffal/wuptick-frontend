import styled from 'styled-components';
import { Link } from '@reach/router';
import { Colors } from '../../assets/css/colors';
import {
    ShadowSecondary,
    TransitionSecondary,
} from '../../assets/css/shared-styles';

export const Dropdown = styled.div`
    position: absolute;
    top: 46px;
    width: 300px;
    transform: translateX(-45%);
    background-color: #fff;
    border: 1px solid ${Colors.white};
    border-radius: 8px;
    padding: 14px;
    overflow: hidden;
    ${ShadowSecondary};
    transition: height 500ms ease;
`;

export const Menu = styled.div`
    width: 100%;
`;

export const MenuItem = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    ${TransitionSecondary};
    padding: 7px;
    :hover {
        background: ${Colors.backgroud};
    }
`;

export const IconRight = styled.span`
    margin-left: auto;
`;

export const IconButton = styled.span`
    width: 30px;
    height: 30px;
    background-color: ${Colors.background};
    border-radius: 50%;
    padding: 5px;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;
`;
