import styled from 'styled-components';
import { Colors } from '../../../assets/css/colors';
import { borderRadius } from '../../../assets/css/theme';
import Skeleton from 'react-loading-skeleton';

export const SkeletonStyled = styled(Skeleton)`
    width: ${({ w }) => (w ? w : '100%')} !important;
`;

export const Container = styled.div``;

export const ReplyContainer = styled.div`
    margin-bottom: 1em;
    background-color: #f9faff;
    padding-bottom: 1em;
    border: 1px solid ${Colors.hover};
    border-radius: ${borderRadius};
    width: 92%;
    @media (max-width: 425px) {
        width: 100%;
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    background-color: ${Colors.whitePrimary};
    border-top-left-radius: ${borderRadius};
    border-top-right-radius: ${borderRadius};
    border-bottom: 1px solid ${Colors.hover};
    box-sizing: border-box;
    padding-top: 5px;
    padding-left: 1em;
`;

export const DescriptionContainer = styled.div`
    padding: 0 1em;
    padding-top: 1em;
`;
