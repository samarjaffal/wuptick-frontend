import styled from 'styled-components';
import { Link } from '@reach/router';
import {
    title,
    description,
    info,
    regular,
    borderRadius,
} from '../../assets/css/theme';
import { Colors } from '../../assets/css/colors';

export const ProfileInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 767px) {
        flex-wrap: wrap;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const ProfileInfo = styled.div`
    margin-left: 1.5em;
    display: flex;
    flex-direction: column;
    @media (max-width: 767px) {
        margin-left: 0;
        width: 100%;
    }
`;

export const Name = styled.h2`
    ${title};
    margin: 0;
`;

export const Email = styled.span`
    ${description};
    color: ${Colors.primary};
`;

export const Ocupation = styled.span`
    ${description};
    color: ${Colors.gray};
`;

export const Age = styled.span`
    ${description};
    color: ${Colors.gray};
`;

export const DescriptionContainer = styled.div`
    width: 60%;
    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const Description = styled.p`
    font-weight: ${regular};
    font-size: 14px;
    color: ${Colors.gray};
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const EditButton = styled(Link)`
    background: ${Colors.primary};
    padding: 10px 30px;
    border-radius: ${borderRadius};
    text-decoration: none;
    ${info};
    color: ${Colors.white};
    @media (max-width: 767px) {
        width: 100%;
        text-align: center;
    }
`;
