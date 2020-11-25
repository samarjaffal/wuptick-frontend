import styled from 'styled-components';
import { Link } from '@reach/router';
import { description, borderRadius } from '../../../assets/css/theme';
import { Colors } from '../../../assets/css/colors';
import { TransitionSecondary } from '../../../assets/css/shared-styles';

export const ModuleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Module = styled.div`
    border: 1px solid ${Colors.hover};
    border-radius: ${borderRadius};
    padding: 0.5em;
    background-color: ${({ isEditing }) =>
        isEditing == true ? Colors.white : Colors.whitePrimary};
    margin: 0;
    cursor: pointer;
    position: relative;
    ${TransitionSecondary};
`;

export const Name = styled(Link)`
    ${description};
    text-decoration: none;
`;

export const Container = styled.div`
    margin-bottom: 1em;
`;

export const Input = styled.input`
    border: none;
    width: 100%;
    background-color: transparent;
    ${description};
    :focus {
        outline: none;
    }
`;
