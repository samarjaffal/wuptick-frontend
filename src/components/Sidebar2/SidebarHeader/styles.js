import styled from 'styled-components';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../../assets/css/colors';
import { TransitionSecondary } from '../../../assets/css/shared-styles';

export const LogoImg = styled.img`
    width: 96px;
`;

export const Anchor = styled(Link)``;

export const SidebarHeader = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoContainer = styled.div`
    flex: 20%;
`;

export const OptionsContainer = styled.div`
    flex: 20%;
    display: flex;
    align-items: center;
    margin-right: 1em;
    justify-content: flex-end;
`;

export const Col = styled.div`
    width: 100%;
`;

export const HamburguerMenu = styled(FontAwesomeIcon)`
    font-size: 20px;
    color: ${Colors.gray};
    ${TransitionSecondary};
    cursor: pointer;
    :hover {
        color: ${Colors.primary};
    }
`;
