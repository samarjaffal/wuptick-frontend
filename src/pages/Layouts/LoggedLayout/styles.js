import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../../assets/css/colors';
import { TransitionSecondary } from '../../../assets/css/shared-styles';
import { borderRadius } from '../../../assets/css/theme';

export const Container = styled.div`
    /* padding-top: 60px; */
    display: flex;
    margin-left: ${({ isCollapsed }) => (isCollapsed ? '150px' : '300px')};
    margin-right: 75px;
    width: 85%;
    padding-top: 15px;
    ${TransitionSecondary}
    @media (max-width: 767px) {
        margin: 0 20px;
    }
`;

export const HamburguerMenu = styled(FontAwesomeIcon)`
    font-size: 20px;
    color: ${Colors.gray};
    ${TransitionSecondary};
    cursor: pointer;
    padding: 8px;
    border-radius: ${borderRadius};
    background-color: ${Colors.white};
    opacity: ${({ isCollapsed }) => (isCollapsed ? '1' : '0')};
    :hover {
        background-color: ${Colors.hover};
    }
`;

export const HamburguerMenuContainer = styled.div`
    margin-right: 15px;
    height: max-content;
    position: absolute;
    left: 50px;
    top: 15px;
`;
