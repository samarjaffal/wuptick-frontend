import styled from 'styled-components';
import { Link } from '@reach/router';
import { TransitionSecondary } from '../../assets/css/shared-styles';
import { Colors } from '../../assets/css/colors';

export const NavAnchor = styled(Link)`
    font-weight: 600;
    color: ${Colors.black};
    text-decoration: none;
    align-items: center;
    padding: 0.5em;
    border-radius: 8px;
    ${TransitionSecondary}
    @media (max-width: 767px) {
        justify-content: center;
        display: flex;
    }

    :hover {
        background-color: ${Colors.backgroud};
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

export const NavLink = styled.li`
    display: inline-block;
    padding: 0px 10px;
    @media (max-width: 767px) {
        display: block;
        /* font-size: 1.5em; */
        line-height: 3em;
        background: ${Colors.white};
        margin: 1em 0;
        border-radius: 8px;
    }
`;
