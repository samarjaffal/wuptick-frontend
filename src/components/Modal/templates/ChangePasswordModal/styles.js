import styled from 'styled-components';
import { Colors } from '../../../../assets/css/colors';
import { Shadow, Transition } from '../../../../assets/css/shared-styles';
import { bold, borderRadius, info } from '../../../../assets/css/theme';

export const ButtonContainer = styled.div`
    margin-top: 0.5em;
    @media (max-width: 768px) {
        text-align: center;
    }
`;

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

export const SaveButton = styled.button`
    border: none;
    background: ${Colors.primary};
    padding: 10px 30px;
    border-radius: ${borderRadius};
    text-decoration: none;
    ${info};
    color: ${Colors.white};
    width: ${({ width }) => (width ? width : 'auto')};
    cursor: pointer;
    :hover {
        ${Shadow};
        ${Transition};
    }
    opacity: ${({ disabled }) => (disabled == true ? 0.6 : 1)};
    @media (max-width: 768px) {
        margin: auto;
        width: 60%;
        text-align: center;
    }
`;
