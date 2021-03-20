import styled from 'styled-components';
import {
    title,
    subtitle,
    description,
    bold,
    borderRadius,
    regular,
} from '../../assets/css/theme';
import { Colors } from '../../assets/css/colors';

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    @media (max-width: 425px) {
        justify-content: center;
    }
`;

export const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 425px) {
        flex-wrap: wrap;
    }
`;

export const RightItemsContainer = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 425px) {
        width: 100%;
        margin: 1.5em 0;
    }
`;

export const TitleContainer = styled.div`
    @media (max-width: 425px) {
        width: 100%;
        text-align: center;
    }
`;

export const Title = styled.h1`
    ${title};
    margin: 0;
`;

export const Filter = styled.span`
    ${description};
    font-weight: ${bold};
    margin-right: 20px;
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
    @media (max-width: 425px) {
        width: 100%;
    }
`;

export const SidebarContainer = styled.div`
    width: 20%;
    @media (max-width: 1024px) {
        width: 30%;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

export const ModuleContainer = styled.div`
    padding-bottom: 15px;
    width: 100%;
    /* padding-left: 50px; */
    /*  @media (max-width: 1024px) {
        width: 70%;
    }

    @media (max-width: 768px) {
        width: 90%;
    }
    @media (max-width: 425px) {
        padding-left: 0;
    } */
`;
