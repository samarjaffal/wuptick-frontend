import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

export const SkeletonStyled = styled(Skeleton)`
    width: ${({ w }) => (w ? w : '100%')} !important;
`;
