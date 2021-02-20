import styled from 'styled-components';
import { borderRadius, description } from '../../assets/css/theme';
import { TransitionSecondary } from '../../assets/css/shared-styles';
import { Colors } from '../../assets/css/colors';

export const Container = styled.div`
    max-height: 130px;
    overflow-y: auto;
`;

export const ItemList = styled.li`
    cursor: pointer;
    padding: 0 0.5em;
    border-radius: ${borderRadius};
    margin-bottom: 0.5em;
    :hover {
        ${TransitionSecondary};
        background-color: ${Colors.hover};
    }
`;

export const Tag = styled.div`
    ${description};
    color: ${({ color }) => (color ? color : Colors.black)};
`;
