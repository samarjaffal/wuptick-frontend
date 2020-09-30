import styled from 'styled-components';
import {
    title,
    borderRadius,
    bold,
    description,
    info,
    subtitle,
} from '../../../assets/css/theme';
import { Colors } from '../../../assets/css/colors';
import { Transition, Shadow } from '../../../assets/css/shared-styles';

export const Title = styled.h1`
    ${title}
    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const AccountTitle = styled.h2`
    ${title}
    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const SubTitle = styled.h4`
    margin: 0;
    ${subtitle};
    font-weight: ${bold};
`;

export const Description = styled.h4`
    margin: 0;
    ${description};
    color: ${Colors.gray};
`;

export const FormContainer = styled.div`
    background: ${Colors.white};
    border-radius: ${borderRadius};
    padding: 20px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const AccountContainer = styled.div`
    background: ${Colors.white};
    border-radius: ${borderRadius};
    padding: 20px;
`;

export const InfoContainer = styled.div`
    width: 80%;
    @media (max-width: 768px) {
        order: 2;
        width: 100%;
    }
`;

export const AvatarContainer = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    @media (max-width: 768px) {
        order: 1;
        margin-bottom: 1em;
        width: 100%;
    }
`;

export const ButtonContainer = styled.div`
    margin-top: 0.5em;
    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const PasswordResetContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`;

export const PasswordInfoContainer = styled.div`
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const DeleteAccountInfoContainer = styled.div`
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const DeleteAccountContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`;

export const PasswordAnchorContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const DeleteAnchorContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
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

export const Anchor = styled.span`
    ${description};
    color: ${({ color }) => (color ? Colors[color] : Colors.primary)};
    margin-top: 0.5em;
    cursor: pointer;
    text-decoration: underline;
`;

export const Hr = styled.hr`
    border: solid 1px ${Colors.hover};
    opacity: 0.6;
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
