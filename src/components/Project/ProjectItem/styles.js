import styled from 'styled-components';
import { Link } from '@reach/router';
import { Colors } from '../../../assets/css/colors';
import { Shadow, Transition } from '../../../assets/css/shared-styles';
import { description, borderRadius, info } from '../../../assets/css/theme';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ProjectContainer = styled.div`
    display: flex;
    align-items: center;
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

export const Anchor = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    :hover {
        background-color: ${Colors.hover};
    }
`;
