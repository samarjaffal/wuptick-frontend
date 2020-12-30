import React from 'react';
import { TaskLists } from '../../../components/Task/TaskLists/index';
import { useDropdown } from '../../../hooks/useDropdown';
import { ListUsersDropdown, TaskItemDropDown } from '../ModuleDropDowns';
import PropTypes from 'prop-types';

export const TasksSection = ({ lists, moduleId }) => {
    const { selectDropDown } = useDropdown();

    const showSelectedDropDown = () => {
        return (
            (selectDropDown == 'list-users' && <ListUsersDropdown />) ||
            (selectDropDown == 'task-item' && <TaskItemDropDown />) ||
            null
        );
    };

    return (
        <>
            <TaskLists lists={lists} moduleId={moduleId} />
            {showSelectedDropDown()}
        </>
    );
};

TasksSection.propTypes = {};
