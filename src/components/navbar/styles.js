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
    ${ShadowSecondary}
`;

export const Avatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    margin-left: 20px;
    cursor: pointer;
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
`;

export const NavUl = styled.ul`
    list-style: none;
`;

export const NavLink = styled.li`
    display: inline-block;
    padding: 0px 20px;
`;

export const NavAnchor = styled(Link)`
    font-weight: 600;
    color: ${Colors.black};
    text-decoration: none;
    ${TransitionSecondary}

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
`;
