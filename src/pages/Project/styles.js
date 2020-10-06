import styled from 'styled-components';
import { title, info } from '../../assets/css/theme';

export const Container = styled.div`
    /*     margin-top: 20px; */
`;

export const ProjectInfoContainer = styled.div`
    display: flex;
`;

export const InfoContainer = styled.div`
    margin-left: 2em;
    width: 80%;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

export const ProjectName = styled.h2`
    margin: 0;
    ${title}
`;

export const ProjectDescription = styled.p`
    ${info};
    font-size: 14px;
    text-align: justify;
`;

export const MembersContainer = styled.div`
    display: flex;
    align-items: center;
`;
