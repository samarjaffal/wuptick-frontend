import styled from 'styled-components';
import { Shadow } from '../../assets/css/shared-styles';
import { Colors } from '../../assets/css/colors';
import { Link } from '@reach/router';
import { bold, borderRadius } from '../../assets/css/theme';

export const Title = styled.h1`
    color: #413f4a;
    font-size: 32px;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    height: 100vh;
    position: relative;
    margin: 0 20px;
`;

export const Content = styled.div`
    width: 435px;
    max-width: 435px;
    background: ${Colors.white};
    border-radius: ${borderRadius};
    padding: 20px;
    text-align: center;
    margin: auto;
    position: relative;
    ${Shadow}
`;

export const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    border: none;
    background: ${Colors.whitePrimary};
    padding: 20px;
    border-radius: ${borderRadius};
    margin-bottom: 10px;
    font-weight: ${bold};
    color: ${Colors.gray};
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
export const Button = styled.button`
    width: 100%;
    height: 50px;
    border: none;
    background: ${Colors.primary};
    color: ${Colors.white};
    margin-bottom: 20px;
    border-radius: ${borderRadius};
    font-weight: ${bold};
    font-size: 16px;
    :hover {
        opacity: 0.8;
        transition-duration: 0.5s;
        transition-property: all;
        cursor: pointer;
    }
`;

export const Anchor = styled(Link)`
    color: ${Colors.primary};
    cursor: pointer;
    -webkit-text-decoration-line: underline; /* Safari */
    text-decoration-line: underline;
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
