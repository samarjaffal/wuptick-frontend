import React, { useEffect, useCallback } from 'react';
import { navigate } from '@reach/router';
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

export const TasksSection = ({ lists, moduleId, taskId }) => {
    const { selectDropDown } = useDropdown();
    const { currentTask } = useUser();
    const {
        panelRef,
        getListId,
        setLists,
        handleOpenTaskPanel,
        openTaskPanelFromURL,
    } = useTask();

    useEffect(() => {
        setLists(lists);
        openTaskPanelFromURL(taskId, lists);
    }, [lists, moduleId]);

    const showSelectedDropDown = () => {
        return (
            (selectDropDown == 'list-users' && <ListUsersDropdown />) ||
            (selectDropDown == 'task-item' && <TaskItemDropDown />) ||
            (selectDropDown == 'list' && <ListDropDown />) ||
            null
        );
    };

    return (
        <>
            <TaskLists
                lists={lists}
                moduleId={moduleId}
                openTaskPanel={handleOpenTaskPanel}
            />
            {showSelectedDropDown()}
            <TaskPanel panelRef={panelRef} />
            <DeleteModal getListId={() => getListId(lists, currentTask._id)} />
        </>
    );
};

TasksSection.propTypes = {
    lists: PropTypes.array,
    moduleId: PropTypes.string,
    taskId: PropTypes.string,
};
