import styled from 'styled-components';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    ShadowSecondary,
    Transition,
    TransitionSecondary,
} from '../../assets/css/shared-styles';
import { Colors } from '../../assets/css/colors';
import { bold, semiBold, borderRadius } from '../../assets/css/theme';

export const Header = styled.header`
    display: flex;
    font-size: 14px;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 0;
    background-color: ${Colors.backgroud};
    ${ShadowSecondary};
    z-index: 99;
    @media (max-width: 767px) {
        padding-top: 1em;
    }
`;

export const NavContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 1em;
    cursor: pointer;
    @media (max-width: 767px) {
        padding-bottom: 1em;
        flex-wrap: nowrap;
        height: 20px;
    }
`;

export const Nav = styled.nav`
    @media (max-width: 767px) {
        order: 2;
        position: absolute;
        background: ${Colors.backgroud};
        width: 100vw;
        /* height: 70vh; */
        top: -100vh;
        left: 0;
        display: flex;
        padding-top: 2em;
        justify-content: center;
        align-items: flex-start;
        z-index: 0;
        transition: all 0.8s ease 0s;
        opacity: 0;
        ${ShadowSecondary};
        ${({ showMobileNav }) =>
            (showMobileNav == true && `top: 0; opacity:1`) ||
            (showMobileNav == false && `top: -100vh; opacity:0`)}
    }
`;

export const AvatarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Anchor = styled(Link)`
    text-decoration: none;
    margin-right: auto;
    font-weight: ${bold};
    color: ${Colors.primary};
    font-size: 1.1em;
    ${TransitionSecondary}
    :hover {
        color: ${Colors.primary};
    }
    z-index: 6;
    @media (max-width: 767px) {
        order: 0;
        width: 100%;
        text-align: center;
        position: relative;
        z-index: 1;
        font-size: 1.3em;
        margin-left: 0;
    }
`;

export const NavUl = styled.ul`
    list-style: none;
    @media (max-width: 767px) {
        width: 100vw;
        padding: 2em;
    }
`;

export const TeamContainer = styled.div`
    flex: auto;
`;

export const AnchorTeam = styled(Link)`
    text-decoration: none;
    font-size: 1em;
    font-weight: ${semiBold};
    color: ${Colors.white};
    padding: 0px 15px;
    background: ${Colors.primary};
    border-radius: ${borderRadius};
    margin-left: 110px;
    ${ShadowSecondary}
    ${Transition}
    :hover {
        background: ${Colors.secondary};
    }
    @media (max-width: 767px) {
        display: none;
    }
`;

export const HamburguerMenu = styled(FontAwesomeIcon)`
    position: absolute;
    top: 1em;
    left: 1em;
    font-size: 20px;
    color: ${Colors.black};
    display: none;
    ${Transition}
    ${HamburguerMenuContainer}:hover {
        color: ${Colors.primary};
    }
    @media (max-width: 767px) {
        display: block;
        position: relative;
        z-index: 1;
        top: 0;
    }
`;

export const HamburguerMenuContainer = styled.span`
    position: absolute;
    width: 60px;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 3;
`;

export const NavLinkLogout = styled.li`
    position: relative;
    display: flex;
    bottom: -30px;
    justify-content: center;
`;

export const LogoutButton = styled.button`
    background: #5271ff;
    border: none;
    width: 100%;
    line-height: 3em;
    color: ${Colors.white};
    border-radius: ${borderRadius};
    font-weight: ${semiBold};
    margin-bottom: 20px;
    :hover {
        opacity: 0.8;
        transition-duration: 0.5s;
        transition-property: all;
        cursor: pointer;
    }
`;

export const LogoContainer = styled.div`
    @media (max-width: 767px) {
        width: 100%;
        text-align: center;
        height: 48px;
    }
`;

export const LogoImg = styled.img`
    width: 96px;
    position: absolute;
    top: -5px;
    @media (max-width: 767px) {
        text-align: center;
        position: relative;
    }
`;
