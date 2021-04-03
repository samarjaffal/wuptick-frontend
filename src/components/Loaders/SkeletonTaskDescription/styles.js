import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

export const SkeletonStyled = styled(Skeleton)`
    width: ${({ w }) => (w ? w : '150')}px !important;
    @media (max-width: 425px) {
        width: ${({ w }) => (w >= 400 ? 375 : w)}px !important;
    }
    @media (max-width: 375px) {
        width: ${({ w }) => (w >= 350 ? 275 : w)}px !important;
    }
`;

export const TaskDescription = styled.div`
    display: flex;
`;

export const DescriptionContainer = styled.div`
    margin-left: 15px;
    width: 100%;
`;

export const Container = styled.div`
    width: 100%;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    margin-top: 0.8em;
`;
