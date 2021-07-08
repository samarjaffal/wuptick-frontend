import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@reach/router';
import { TransitionSecondary } from '../../../assets/css/shared-styles';
import { Colors } from '../../../assets/css/colors';
import {
    semiBold,
    borderRadius,
    defaultFontSize,
} from '../../../assets/css/theme';

export const Title = styled.div`
    flex: 80%;
    font-size: ${defaultFontSize};
    color: ${Colors.black};
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
`;

export const SidebarLink = styled.li`
    width: 100%;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em 0;
    /* padding-left: 15px; */
    font-weight: ${semiBold};
    color: ${Colors.black};
    text-decoration: none;
    border-radius: ${borderRadius};
    font-size: ${defaultFontSize};
    ${TransitionSecondary}
    :hover {
        background-color: ${Colors.hover};
    }
`;

export const IconContainer = styled.div`
    flex: 20%;
    text-align: right;
    margin-right: 0.5em;
`;

export const Icon = styled(FontAwesomeIcon)`
    /*   flex: 30%; */
`;

export const ButtonToggleList = styled.div`
    margin-right: 16px;
    width: 40px;
    cursor: pointer;
    text-align: right;
`;
