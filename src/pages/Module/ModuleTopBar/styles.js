import styled from 'styled-components';
import { Colors } from '../../../assets/css/colors';
import {
    title,
    description,
    bold,
    borderRadius,
} from '../../../assets/css/theme';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 425px) {
        flex-wrap: wrap;
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

export const RightItemsContainer = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 425px) {
        width: 100%;
        margin: 1.5em 0;
    }
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
