import styled from 'styled-components';
import { Colors } from '../../../../../assets/css/colors';
import { borderRadius, description } from '../../../../../assets/css/theme';
import { TransitionSecondary } from '../../../../../assets/css/shared-styles';

export const Item = styled.div`
    cursor: pointer;
    padding: 0 0.5em;
    border-radius: ${borderRadius};
    ${description};
    :hover {
        ${TransitionSecondary};
        background-color: ${Colors.hover};
    }
`;
