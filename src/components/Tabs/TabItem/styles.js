import styled from 'styled-components';
import { Link } from '@reach/router';
import { borderRadius, description } from '../../../assets/css/theme';
import { Colors } from '../../../assets/css/colors';
import { TransitionSecondary } from '../../../assets/css/shared-styles';

export const Tab = styled(Link)`
    margin-left: 2em;
    text-decoration: none;
    padding: 0.5em;
    ${description};
    border-radius: ${borderRadius};
    :hover {
        background-color: ${Colors.hover};
    }
    &:first-child {
        margin-left: 0;
    }
    ${({ active }) => active == 1 && `background-color: ${Colors.hover};`}
    ${TransitionSecondary}
`;
