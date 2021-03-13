import styled from 'styled-components';
import { Link } from '@reach/router';
import { Colors } from '../../../../../assets/css/colors';
import { description, regular } from '../../../../../assets/css/theme';
import { TransitionSecondary } from '../../../../../assets/css/shared-styles';

export const ModulesList = styled.ul`
    list-style: none;
    margin: 0;
    display: ${({ show }) => (show ? show : 'none')};
`;

export const ModuleTitle = styled(Link)`
    ${description};
    font-weight: ${regular};
    color: ${Colors.black};
    cursor: pointer;
    text-decoration: none;
    ${TransitionSecondary};
    :hover {
        color: ${Colors.primary};
    }
`;
