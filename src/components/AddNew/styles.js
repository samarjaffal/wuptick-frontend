import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../assets/css/colors';
import { Transition } from '../../assets/css/shared-styles';
import { borderRadius, info, bold, description } from '../../assets/css/theme';

export const Container = styled.div`
    background-color: ${({ isEditing, bgColor }) =>
        isEditing == true ? (bgColor ? bgColor : Colors.hover) : 'transparent'};
    padding: 1em;
    border-radius: ${borderRadius};
    font-size: 14px;
    margin-bottom: 1em;
    cursor: ${({ cursor }) => cursor};
    ${Transition};
    background-image: ${({ isEditing, border }) =>
        (isEditing == true && 'none') ||
        (border == true &&
            isEditing == false &&
            `url(
                  "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23D6D7E0FF' stroke-width='1.5' stroke-dasharray='5' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e"
              )`) ||
        (isEditing == false && border == false && 'none')};

    cursor: pointer;
`;

export const Text = styled.span`
    ${info};
    color: ${Colors.gray};
    font-weight: ${bold};
    ${Transition};
    ${Container}:hover & {
        color: ${Colors.black};
    }
`;

export const Icon = styled(FontAwesomeIcon)`
    font-size: 10px;
    ${Transition};
    ${Container}:hover & {
        color: ${Colors.black};
    }
`;

export const Input = styled.input`
    border: none;
    width: 100%;
    background-color: transparent;
    ${description};
    :focus {
        outline: none;
    }
`;
