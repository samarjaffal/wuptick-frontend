import styled from 'styled-components';
import {
    title,
    subtitle,
    description,
    bold,
    borderRadius,
    regular,
} from '../../assets/css/theme';
import { Colors } from '../../assets/css/colors';

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    @media (max-width: 425px) {
        justify-content: center;
    }
`;

export const SidebarContainer = styled.div`
    width: 20%;
    @media (max-width: 1024px) {
        width: 30%;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

export const ModuleContainer = styled.div`
    padding-bottom: 15px;
    width: 100%;
    /* padding-left: 50px; */
    /*  @media (max-width: 1024px) {
        width: 70%;
    }

    @media (max-width: 768px) {
        width: 90%;
    }
    @media (max-width: 425px) {
        padding-left: 0;
    } */
`;
