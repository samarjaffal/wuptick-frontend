import React from 'react';
import PropTypes from 'prop-types';
import { TaskListItems } from '../TaskListItems';
import { AddNew } from '../../AddNew/index';
import {
    TaskList as TaskListStyled,
    TaskListHeader,
    TaskListTitle,
    ColumnHeader,
    ColumnName,
    TaskListColumns,
} from './styles';

export const TaskList = ({ list = {} }) => {
    return (
        <TaskListStyled>
            <TaskListHeader>
                <TaskListTitle>{list.name}</TaskListTitle>
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
            <TaskListItems tasks={list.tasks} />
            <AddNew
                text="Add Task"
                icon={true}
                border={false}
                bgColor="transparent"
            />
        </TaskListStyled>
    );
};

TaskList.propTypes = {};
