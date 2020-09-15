import styled from 'styled-components';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../../assets/css/colors';
import { Shadow, Transition } from '../../../assets/css/shared-styles';
import {
    description,
    borderRadius,
    info,
    bold,
} from '../../../assets/css/theme';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 424px) {
        flex-wrap: wrap;
    }
    position: relative;
`;

export const ProjectContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const MembersContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 50%;
    @media (max-width: 424px) {
        justify-content: flex-start;
        width: 100%;
        margin-top: 0.5em;
    }
`;

export const Name = styled(Link)`
    ${description};
    text-decoration: none;
`;

export const ButtonContainer = styled.div``;

export const Button = styled(Link)`
    background: ${({ bg }) => bg || Colors.primary};
    ${info};
    color: ${({ color }) => color || Colors.white};
    padding: ${({ padding }) => padding || '10px'};
    border-radius: ${borderRadius};
    text-decoration: none;
    margin: ${({ margin }) => margin || 0};
    :hover {
        ${Shadow};
        ${Transition};
    }
`;

export const OptionsButton = styled.div`
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 28px;
    border-radius: 8px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    ${Container}:hover & {
        opacity: 1;
    }
    :hover {
        opacity: 1;
        background-color: ${Colors.white};
    }

    @media (max-width: 424px) {
        position: absolute;
        right: 0;
        top: 0;
    }
`;

export const Anchor = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    :hover {
        background-color: ${Colors.hover};
    }
`;

export const Details = styled.h6`
    margin: 0;
    ${info};
    font-weight: ${bold};
`;

export const Clock = styled(FontAwesomeIcon)`
    margin-right: 0.5em;
`;
