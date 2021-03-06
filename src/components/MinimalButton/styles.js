import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';
import { borderRadius, description, bold } from '../../assets/css/theme';
import { TransitionSecondary } from '../../assets/css/shared-styles';

export const BoxOption = styled.div`
    border-radius: ${borderRadius};
    background-color: ${({ bg }) => (bg ? bg : Colors.white)};
    padding: 8px;
    margin: 0 12px;
    cursor: pointer;
    height: 25px;
    min-width: 25px;
    ${({ size }) =>
        size
            ? `width: ${size}px; height: ${size}px; padding:0; max-height: ${size}px`
            : ''};
    &:first-child {
        margin-left: 0;
    }
    ${TransitionSecondary};
    :hover {
        background-color: ${({ hover }) => (hover ? hover : Colors.hover)};
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
`;
