import styled from 'styled-components';
import { description, info } from '../../../assets/css/theme';
import { Colors } from '../../../assets/css/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Task = styled.div`
    border: 1px solid #dddee5;
    border-left: none;
    margin-bottom: -1px;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 40px;
    width: ${({ isDragging }) => (isDragging ? '70%' : '100%')};
    background-color: ${Colors.whitePrimary};
    border-right: none;
    position: relative;
    @media (max-width: 425px) {
        border-right: none;
    }
`;

export const TextContainer = styled.div`
    margin-left: 30px;
    width: 70%;
    display: flex;
    position: relative;
    @media (max-width: 425px) {
        width: 100%;
    }
`;

export const TaskText = styled.p`
    color: ${Colors.black};
    ${description};
    font-weight: 400;
    margin: 0;
    margin-left: 10px;
    margin-right: 0.5em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
    -webkit-box-orient: vertical;
    cursor: pointer;
    :hover {
        text-decoration: underline;
    }
`;

export const OptionButtonContainer = styled.div`
    opacity: 0;
    ${TextContainer}:hover & {
        opacity: 1;
    }
`;

export const TaskOptions = styled.div`
    display: flex;
    margin-left: auto;
    visibility: ${({ isDragging }) => (isDragging ? 'hidden' : 'visible')};
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
    &:last-child {
        border-right: none;
    }
    @media (max-width: 425px) {
        display: none;
    }
`;
export const AsigneeOption = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const CenterContent = styled.div`
    width: 100%;
    text-align: center;
`;

export const DragDropContainer = styled.div`
    position: absolute;
`;

export const IconDragDrop = styled(FontAwesomeIcon)`
    color: ${Colors.secondary};
    visibility: hidden;
    ${Task}:hover & {
        visibility: visible;
    }
`;
