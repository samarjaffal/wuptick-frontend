import styled from 'styled-components';
import { title } from '../../assets/css/theme';
export const Container = styled.div`
    padding-top: 48px;
    margin-left: 1em;
    margin-right: 1em;
`;

export const Title = styled.h1`
    ${title};
    text-align: center;
`;

export const ProjectsContainer = styled.div`
    max-width: 350px;
    @media (max-width: 768px) {
        max-width: 100%;
    }
`;
