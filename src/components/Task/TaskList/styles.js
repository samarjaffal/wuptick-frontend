import styled from 'styled-components';
import { subtitle, bold, description } from '../../../assets/css/theme';
import { Colors } from '../../../assets/css/colors';

export const TaskList = styled.div`
    /*  margin-top: 2em; */
    background-color: ${Colors.whitePrimary};
`;

export const TaskListHeader = styled.div`
    border: 1px solid transparent;
    border-left: none;
    margin-bottom: -1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
`;

export const TaskListTitle = styled.h3`
    ${subtitle}
    font-weight: ${bold};
`;

export const TaskListColumns = styled.div`
    display: flex;
    @media (max-width: 425px) {
        display: none;
    }
`;

export const ColumnHeader = styled.div`
    padding: 0 1em;
    display: flex;
    align-items: center;
    height: 40px;
    width: 65px;
`;

export const ColumnName = styled.span`
    text-align: center;
    width: 100%;
    ${description};
`;

export const Placeholder = styled.div`
    position: absolute;
    background-color: ${Colors.hover};
    opacity: ${({ isDragging }) => (isDragging == true ? 0.6 : 1)};
    transition: opacity 0.5s ease 0s;
    top: ${({ top }) => (top ? `${top}px` : '0')};
    left: ${({ left }) => (left ? `${left}px` : '0')};
    height: ${({ height }) => (height ? `${height}px` : '0')};
    width: ${({ width }) => (width ? `${width}px` : '0')};
`;
