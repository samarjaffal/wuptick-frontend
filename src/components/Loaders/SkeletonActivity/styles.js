import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

export const Container = styled.div`
    display: flex;
`;

export const ImageContainer = styled.div``;

export const ActitivityContainer = styled.div`
    margin: 0 1em;
    width: 100%;
`;

export const AvatarSkeleton = styled(Skeleton)`
    @media (max-width: 767px) {
        display: none;
    }
`;
