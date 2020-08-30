import styled from 'styled-components';
import { title } from '../../assets/css/theme';
export const Container = styled.div`
    padding-top: 48px;
    margin: 0 80px;
    @media (max-width: 768px) {
        margin: 0 20px;
    }
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
    @media (max-width: 768px) {
        text-align: center;
        margin-left: 0;
    }
`;

export const ProjectsContainer = styled.div`
    width: 320px;
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
