import styled from 'styled-components';
import { Shadow } from '../../assets/css/shared-styles';

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
`;

export const Content = styled.div`
    width: 435px;
    height: 280px;
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    margin: auto;
    ${Shadow}
`;

export const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    border: none;
    background: #f9faff;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    font-weight: 700;
    color: #a7a8af;
    :focus {
        outline: none;
        border: 1px solid #5271ff;
        border-radius: 8px;
    }
    ::placeholder,
    ::-webkit-input-placeholder {
        font-weight: 700;
        color: #a7a8af;
    }
    :-ms-input-placeholder {
        font-weight: 700;
        color: #a7a8af;
    }
`;
export const Button = styled.button`
    width: 100%;
    height: 50px;
    border: none;
    background: #5271ff;
    color: #f9faff;
    margin-bottom: 20px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 16px;
    :hover {
        opacity: 0.8;
        transition-duration: 0.5s;
        transition-property: all;
        cursor: pointer;
    }
`;
