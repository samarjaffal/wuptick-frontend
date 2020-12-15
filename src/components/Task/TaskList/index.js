import React from 'react';
import PropTypes from 'prop-types';
import { TaskListItems } from '../TaskListItems';
import {
    TaskList as TaskListStyled,
    TaskListHeader,
    TaskListTitle,
    ColumnHeader,
    ColumnName,
    TaskListColumns,
} from './styles';

export const TaskList = () => {
    return (
        <TaskListStyled>
            <TaskListHeader>
                <TaskListTitle>Frontend 🏆</TaskListTitle>
                <TaskListColumns>
                    <ColumnHeader>
                        <ColumnName>Asignee</ColumnName>
                    </ColumnHeader>
                    <ColumnHeader>
                        <ColumnName>Deadline</ColumnName>
                    </ColumnHeader>
                    <ColumnHeader>
                        <ColumnName>Favorite</ColumnName>
                    </ColumnHeader>
                </TaskListColumns>
            </TaskListHeader>
            <TaskListItems />
        </TaskListStyled>
    );
};

TaskList.propTypes = {};
