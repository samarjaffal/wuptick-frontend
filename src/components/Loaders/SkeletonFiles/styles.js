import styled from 'styled-components';
import { Colors } from '../../../assets/css/colors';
import { borderRadius } from '../../../assets/css/theme';
import Skeleton from 'react-loading-skeleton';

const FILE_WIDTH = '280px';

export const SkeletonStyled = styled(Skeleton)`
    width: ${({ w }) => (w ? w : '100%')} !important;
`;

export const Container = styled.div`
    width: ${FILE_WIDTH};
    max-width: ${FILE_WIDTH};
    background: ${Colors.white};
    padding: 0.8em;
    border-radius: ${borderRadius};
    position: relative;
    margin-right: 1em;
    margin-bottom: 1em;
`;

export const AvatarContainer = styled.div`
    position: absolute;
    right: 45px;
`;

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`;
