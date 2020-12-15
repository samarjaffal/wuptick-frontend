import styled from 'styled-components';
import { subtitle, bold, description } from '../../../assets/css/theme';

export const TaskList = styled.div`
    margin-top: 2em;
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
