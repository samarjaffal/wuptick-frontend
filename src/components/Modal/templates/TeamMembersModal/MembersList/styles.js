import styled from 'styled-components';
import { Colors } from '../../../../../assets/css/colors';
import { TransitionSecondary } from '../../../../../assets/css/shared-styles';
import { borderRadius } from '../../../../../assets/css/theme';

export const MemberContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 0.5em;
    border-radius: ${borderRadius};
    align-items: center;
    ${TransitionSecondary};
    :hover {
        background-color: ${Colors.hover};
    }
`;

export const RemoveButton = styled.span`
    color: ${Colors.red};
    text-decoration: underline;
    cursor: pointer;
    opacity: 0;
    ${TransitionSecondary};
    ${MemberContainer}:hover & {
        opacity: 1;
    }
`;
