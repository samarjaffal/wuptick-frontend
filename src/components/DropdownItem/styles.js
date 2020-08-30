import styled from 'styled-components';
import { Link } from '@reach/router';
import { Colors } from '../../assets/css/colors';
import { TransitionSecondary } from '../../assets/css/shared-styles';
import { semiBold, borderRadius } from '../../assets/css/theme';

export const MenuItem = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: ${borderRadius};
    ${TransitionSecondary};
    padding: 7px;
    text-decoration: none;
    font-size: 1em;
    font-weight: ${semiBold};
    color: ${Colors.black};
    :hover {
        background: ${Colors.hover};
    }
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
export const IconRight = styled.span`
    margin-left: auto;
`;