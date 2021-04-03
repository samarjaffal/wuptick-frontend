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

export const Container = styled.div`
    padding: 0.5em 0;
    padding-left: 30px;
`;

export const ProjectItem = styled.div`
    padding: 8px 0;
`;
