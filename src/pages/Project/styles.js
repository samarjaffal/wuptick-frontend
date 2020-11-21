import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { title, info } from '../../assets/css/theme';
import { Transition } from '../../assets/css/shared-styles';

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
    margin-right: 0.5em;
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

export const EditButton = styled.div`
    cursor: pointer;
`;

export const EditIcon = styled(FontAwesomeIcon)`
    font-size: 12px;
    color: ${Colors.gray};
    ${Transition};
    ${EditButton}:hover & {
        color: ${Colors.primary};
    }
`;
