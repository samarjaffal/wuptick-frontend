import styled from 'styled-components';
import { Link } from '@reach/router';
import {
    ShadowSecondary,
    Transition,
    TransitionSecondary,
} from '../../assets/css/shared-styles';
import { Colors } from '../../assets/css/colors';

export const Header = styled.header`
    display: flex;
    font-size: 14px;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 15px;
    background-color: ${Colors.white};
    flex-wrap: wrap;
    ${ShadowSecondary};

    @media (max-width: 767px) {
        padding-top: 1em;
    }
`;

export const Nav = styled.nav`
    @media (max-width: 767px) {
        width: 100%;
        order: 2;
    }
`;

export const Avatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    margin-left: 20px;
    cursor: pointer;

    @media (max-width: 767px) {
        order: 1;
    }
`;

export const Anchor = styled(Link)`
    text-decoration: none;
    margin-right: auto;
    font-weight: 800;
    color: ${Colors.primary};
    font-size: 1.1em;
    ${TransitionSecondary}
    :hover {
        color: ${Colors.primary};
    }
    @media (max-width: 767px) {
        order: 0;
    }
`;

export const NavUl = styled.ul`
    list-style: none;
    @media (max-width: 767px) {
        padding: 0;
    }
`;

export const NavLink = styled.li`
    display: inline-block;
    padding: 0px 20px;
    @media (max-width: 767px) {
        padding: 10px 0px;
        display: block;
    }
`;

export const NavAnchor = styled(Link)`
    font-weight: 600;
    color: ${Colors.black};
    text-decoration: none;
    align-items: center;
    ${TransitionSecondary}
    @media (max-width: 767px) {
        justify-content: center;
        display: flex;
    }

    :hover {
        ${({ option }) =>
            (option === 'projects' && `color:${Colors.primary}`) ||
            (option === 'teams' && `color:${Colors.orange}`) ||
            (option === 'tasks' && `color:${Colors.yellow}`)}
    }
`;

export const NavAnchorTitle = styled.div`
    display: inline-block;
    margin-left: 5px;
`;

export const TeamContainer = styled.div`
    flex: auto;
`;

export const AnchorTeam = styled(Link)`
    text-decoration: none;
    font-size: 1em;
    font-weight: 600;
    color: ${Colors.white};
    padding: 0px 15px;
    background: ${Colors.secondary};
    border-radius: 8px;
    margin-left: 20px;
    ${ShadowSecondary}
    ${Transition}
    :hover {
        color: ${Colors.white};
        background: ${Colors.primary};
    }
    @media (max-width: 767px) {
        display: none;
    }
`;
