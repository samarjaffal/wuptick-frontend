import styled from 'styled-components';
import { Link } from '@reach/router';
import { Colors } from '../../../../../assets/css/colors';
import { description, regular } from '../../../../../assets/css/theme';
import { TransitionSecondary } from '../../../../../assets/css/shared-styles';

export const ModulesList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 5px 30px;
    display: ${({ show }) => (show ? show : 'none')};
`;

export const ModuleTitle = styled(Link)`
    ${description};
    font-weight: ${regular};
    color: ${Colors.black};
    cursor: pointer;
    text-decoration: none;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    width: 100%;
    overflow: hidden;
    ${TransitionSecondary};
    :hover {
        color: ${Colors.primary};
    }
`;
