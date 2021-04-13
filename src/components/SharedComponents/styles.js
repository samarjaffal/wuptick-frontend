import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';
import UserIcon from '../../assets/images/user.svg';
import {
    info,
    borderRadius,
    description,
    regular,
    bold,
} from '../../assets/css/theme';
import {
    ShadowSecondary,
    Shadow,
    TransitionSecondary,
} from '../../assets/css/shared-styles';

export const FlexSpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${({ customProps }) => customProps};
`;

export const FlexCenter = styled.div`
    display: flex;
    align-items: center;
    ${({ customProps }) => customProps};
`;

export const Div = styled.div`
    ${({ customProps }) => customProps};
`;

export const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    ${({ customProps }) => customProps};
`;

export const ErrorMessage = styled.p`
    color: ${Colors.red};
    margin: 0 0 10px 5px;
    text-align: left;
    font-size: 12.5px;
    :before {
        display: inline;
        content: '⚠ ';
    }
`;

export const Button = styled.button`
    border: none;
    background: ${({ bg }) => (bg ? bg : Colors.primary)};
    padding: ${({ padding }) => (padding ? padding : `10px 30px`)};
    border-radius: ${borderRadius};
    text-decoration: none;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '12px')};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
    color: ${({ color }) => (color ? color : Colors.white)};
    width: ${({ width }) => (width ? width : 'auto')};
    margin: ${({ margin }) => (margin ? margin : 'auto')};
    cursor: pointer;
    :hover {
        ${TransitionSecondary};
        opacity: 0.8;
    }
    :focus {
        outline: none;
    }
    opacity: ${({ disabled }) => (disabled == true ? 0.6 : 1)};
    @media (max-width: 768px) {
        margin: auto;
        width: 60%;
        text-align: center;
    }
`;

export const Input = styled.input`
    border: none;
    width: 100%;
    background-color: transparent;
    ${description};
    font-weight: ${regular};
    ${({ customProps }) => customProps};
    box-sizing: border-box;
    :focus {
        outline: none;
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

export const UserIconContainer = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='15' ry='15' stroke='%23D6D7E0FF' stroke-width='1.5' stroke-dasharray='5' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    text-align: center;
    cursor: pointer;
    ${({ customProps }) => customProps};
    :hover {
        ${TransitionSecondary};
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='15' ry='15' stroke='%23A7A8AF' stroke-width='1.5' stroke-dasharray='5' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    }
`;

export const UserIconSVG = styled(UserIcon)`
    fill: ${Colors.softGray};
    ${UserIconContainer}:hover & {
        fill: ${Colors.gray};
        ${TransitionSecondary};
    }
`;
