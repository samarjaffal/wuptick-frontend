import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

export const SkeletonStyled = styled(Skeleton)`
    width: ${({ w }) => (w ? w : '100%')} !important;
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
