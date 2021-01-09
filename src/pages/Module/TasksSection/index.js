import React from 'react';
import { TaskLists } from '../../../components/Task/TaskLists/index';
import { useUser } from '../../../hooks/useUser';
import { useDropdown } from '../../../hooks/useDropdown';
import { useTask } from '../../../hooks/useTask';
import { TaskPanel } from '../../../components/TaskPanel/index';
import {
    ListUsersDropdown,
    TaskItemDropDown,
    ListDropDown,
} from '../ModuleDropDowns';

import { DeleteModal } from '../ModuleModals';
import PropTypes from 'prop-types';

export const TasksSection = ({ lists, moduleId }) => {
    const { selectDropDown } = useDropdown();
    const { currentTask } = useUser();
    const { panelRef, openTaskPanel } = useTask();

    const showSelectedDropDown = () => {
        return (
            (selectDropDown == 'list-users' && <ListUsersDropdown />) ||
            (selectDropDown == 'task-item' && <TaskItemDropDown />) ||
            (selectDropDown == 'list' && <ListDropDown />) ||
            null
        );
    };

    const listHaveTask = (list) => {
        return list.tasks.some((task) => task._id == currentTask._id);
    };

    const getListId = () => {
        const list = lists.find(listHaveTask);
        return list._id;
    };

    return (
        <>
            <TaskLists
                lists={lists}
                moduleId={moduleId}
                openTaskPanel={openTaskPanel}
            />
            {showSelectedDropDown()}
            <TaskPanel panelRef={panelRef} />
            <DeleteModal getListId={() => getListId()} />
        </>
    );
};

TasksSection.propTypes = {
    lists: PropTypes.array,
    moduleId: PropTypes.string,
};
