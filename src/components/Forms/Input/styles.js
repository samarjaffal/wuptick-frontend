import styled from 'styled-components';
import { Colors } from '../../../assets/css/colors';
import { bold, borderRadius } from '../../../assets/css/theme';

export const Input = styled.input`
    box-sizing: border-box;
    width: ${({ width }) => (width ? width : '100%')};
    height: 50px;
    border: none;
    background-color: ${({ bg }) => (bg ? bg : Colors.whitePrimary)};
    padding: 20px;
    border-radius: ${borderRadius};
    margin-bottom: 10px;
    font-weight: ${bold};
    color: ${Colors.black};
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
