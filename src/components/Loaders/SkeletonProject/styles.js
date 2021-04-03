import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

export const SkeletonStyled = styled(Skeleton)`
    width: ${({ w }) => (w ? w : '100%')} !important;
`;

export const Container = styled.div`
    /*     margin-top: 20px; */
    width: 100%;
`;

export const ProjectInfoContainer = styled.div`
    display: flex;
    @media (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: column;
    }
`;

export const ImageContainer = styled.div`
    @media (max-width: 768px) {
        margin: auto;
        margin-bottom: 1em;
    }
`;

export const InfoContainer = styled.div`
    margin-left: 2em;
    width: 80%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        margin-left: 0;
        width: 100%;
        text-align: center;
    }
`;

export const MembersContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1em;
    @media (max-width: 425px) {
        justify-content: center;
    }
`;

export const TabsContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 1.8em 0px;
    margin-bottom: 1em;
    flex-wrap: wrap;
    @media (max-width: 425px) {
        justify-content: center;
    }
`;
