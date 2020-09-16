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
`;

export const AccountTitle = styled.h2`
    ${title}
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
`;

export const AccountContainer = styled.div`
    background: ${Colors.white};
    border-radius: ${borderRadius};
    padding: 20px;
`;

export const InfoContainer = styled.div`
    width: 80%;
`;

export const AvatarContainer = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
`;

export const ButtonContainer = styled.div`
    margin-top: 0.5em;
`;

export const PasswordResetContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const DeleteAccountContainer = styled.div`
    display: flex;
    justify-content: space-between;
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
    background: ${Colors.whitePrimary};
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

export const Anchor = styled.a`
    ${description};
    color: ${({ color }) => (color ? Colors[color] : Colors.primary)};
    margin-top: 0.5em;
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
    cursor: pointer;
    :hover {
        ${Shadow};
        ${Transition};
    }
    /*     @media (max-width: 767px) {
        margin: auto;
        width: 40%;
        text-align: center;
    } */
`;
