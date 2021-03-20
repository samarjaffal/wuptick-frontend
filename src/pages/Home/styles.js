import styled from 'styled-components';
import { title } from '../../assets/css/theme';

export const Container = styled.div`
    width: 100%;
`;

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    font-size: 14px;
    justify-content: flex-start;
    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const Title = styled.h1`
    ${title};
    margin-left: 350px;
    margin-top: 0;

    @media (max-width: 768px) {
        margin-left: 0;
    }
    @media (max-width: 425px) {
        width: 100%;
        text-align: center;
    }
`;

export const ProjectsContainer = styled.div`
    width: 270px;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const ActivityContainer = styled.div`
    width: calc(100% - 348px);
    margin-left: 2em;
    @media (max-width: 768px) {
        width: 100%;
        margin: 0;
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 1em;
`;
