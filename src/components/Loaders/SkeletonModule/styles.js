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

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    @media (max-width: 425px) {
        justify-content: center;
    }
`;

export const TitleContainer = styled.div`
    width: 50%;
    @media (max-width: 425px) {
        display: none;
    }
`;

export const TabsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    flex-wrap: wrap;
    @media (max-width: 425px) {
        justify-content: center;
        margin-top: 30px;
    }
`;

export const TasksContainer = styled.div`
    margin-top: 30px;
`;

export const Task = styled.div`
    border: 1px solid #dddee5;
    border-left: none;
    margin-bottom: -1px;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 40px;
    width: 100%;
    border-right: none;
    position: relative;
`;

export const OptionContainer = styled.div`
    padding: 0 1em;
    border-left: 1px solid #dddee5;
    border-right: 1px solid #dddee5;
    margin-right: -1px;
    display: flex;
    align-items: center;
    height: 40px;
    width: 65px;
    justify-content: center;
    &:last-child {
        border-right: none;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

export const TaskOptions = styled.div`
    display: flex;
    margin-left: auto;
    visibility: visible;
`;

export const ListContainer = styled.div`
    margin-bottom: 40px;
`;
