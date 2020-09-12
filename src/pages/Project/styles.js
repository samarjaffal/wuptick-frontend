import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';
import { TransitionSecondary } from '../../assets/css/shared-styles';
import { description, title, info, borderRadius } from '../../assets/css/theme';
import { Link } from '@reach/router';

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

export const MembersList = styled.div`
    margin-top: 1em;
`;

export const TabsContainer = styled.div`
    margin: 1em 0;
`;

export const TabItem = styled(Link)`
    margin-left: 2em;
    text-decoration: none;
    padding: 0.5em;
    ${description};
    border-radius: ${borderRadius};
    :hover {
        background-color: ${Colors.hover};
    }
    &:first-child {
        margin-left: 0;
    }
    ${({ active }) => active == 1 && `background-color: ${Colors.hover};`}
    ${TransitionSecondary}
`;
