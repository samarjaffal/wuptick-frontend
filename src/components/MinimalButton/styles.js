import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';
import { borderRadius, description, bold } from '../../assets/css/theme';
import { TransitionSecondary } from '../../assets/css/shared-styles';

export const BoxOption = styled.div`
    border-radius: ${borderRadius};
    background-color: ${Colors.white};
    padding: 8px;
    margin: 0 8px;
    cursor: pointer;
    max-height: 25px;
    &:first-child {
        margin-left: 0;
    }
    ${TransitionSecondary};
    :hover {
        background-color: ${({ color }) => (color ? color : Colors.hover)};
    }
`;

export const BoxOptionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const BoxOptionName = styled.span`
    ${description};
    font-weight: ${bold};
    color: ${({ color }) => (color ? color : Colors.gray)};
    margin-left: 0.5em;
    ${BoxOption}:hover & {
        color: ${Colors.whitePrimary};
    }
`;
