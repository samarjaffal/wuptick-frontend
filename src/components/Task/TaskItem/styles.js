import styled from 'styled-components';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Transition } from '../../../assets/css/shared-styles';
import { Colors } from '../../../assets/css/colors';
import {
    description,
    bold,
    borderRadius,
    info,
} from '../../../assets/css/theme';

export const Container = styled.div`
    display: flex;
`;

export const Title = styled(Link)`
    text-decoration: none;
    font-weight: ${bold};
    ${description};
    color: ${Colors.gray};
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Check = styled.div`
    width: 18px;
    height: 18px;
    background-color: #d6d7e0;
    border-radius: 4px;
    margin-right: 0.5em;
`;

export const Star = styled(FontAwesomeIcon)`
    color: ${Colors.yellow};
`;

export const Element = styled.div`
    margin-bottom: 1em;
    border: ${({ dotted }) =>
        dotted !== true ? `1px solid ${Colors.hover}` : 'none'};
    display: flex;
    align-items: center;
    padding: 0.5em;
    margin-left: 0.5em;
    border-radius: ${borderRadius};
    background-image: ${({ dotted }) =>
        dotted !== true
            ? 'none'
            : `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23EDF0FFFF' stroke-width='1.8' stroke-dasharray='5' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`};

    opacity: ${({ displayOnHover }) => (displayOnHover == true ? 0 : 1)};
    ${Container}:hover & {
        opacity: 1;
    }

    :hover {
        ${Transition};
        background-color: ${Colors.hover};
    }
`;

export const Plus = styled(FontAwesomeIcon)`
    color: ${Colors.hover};
    ${Element}:hover & {
        color: ${Colors.gray};
    }
`;

export const Deadline = styled.span`
    background-color: ${Colors.red};
    padding: 0 0.5em;
    ${info};
    border-radius: ${borderRadius};
    color: ${Colors.white};
`;
