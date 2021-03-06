import styled from 'styled-components';
import { borderRadius, description, bold } from '../../assets/css/theme';
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    :hover {
        ${TransitionSecondary};
        background-color: ${Colors.hover};
    }
`;

export const Tag = styled.div`
    ${description};
    color: ${({ color }) => (color ? color : Colors.black)};
`;

export const RemoveButton = styled.div`
    font-size: 12px;
    display: none;
    ${ItemList}:hover & {
        display: block;
        color: ${Colors.red};
    }
`;

export const InputSearch = styled.input`
    background-color: ${Colors.backgroud};
    height: 30px;
    box-sizing: border-box;
    border: none;
    padding: 10px;
    color: ${Colors.black};
    font-weight: ${bold};
    border-radius: ${borderRadius};
    width: 100%;
    :focus {
        outline: none;
        border: 1px solid ${Colors.primary};
        border-radius: ${borderRadius};
    }
    ::placeholder,
    ::-webkit-input-placeholder {
        font-weight: ${bold};
        color: ${Colors.gray};
    }
    :-ms-input-placeholder {
        font-weight: ${bold};
        color: ${Colors.gray};
    }
`;
