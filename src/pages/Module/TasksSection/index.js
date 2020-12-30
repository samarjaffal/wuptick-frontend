import React, { useRef } from 'react';
import { TaskLists } from '../../../components/Task/TaskLists/index';
import { useUser } from '../../../hooks/useUser';
import { useDropdown } from '../../../hooks/useDropdown';
import { useTask } from '../../../hooks/useTask';
import { ListUsersDropdown, TaskItemDropDown } from '../ModuleDropDowns';
import { DeleteModal } from '../../../components/Modal/templates/DeleteModal/index';
import { DeleteTaskMutation } from '../../../requests/Task/DeleteTaskMutation';
import PropTypes from 'prop-types';

export const TasksSection = ({ lists, moduleId }) => {
    const { selectDropDown } = useDropdown();
    const { currentTask, currentModule } = useUser();
    const { deleteModalRef } = useTask();

    const showSelectedDropDown = () => {
        return (
            (selectDropDown == 'list-users' && <ListUsersDropdown />) ||
            (selectDropDown == 'task-item' && <TaskItemDropDown />) ||
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
            <TaskLists lists={lists} moduleId={moduleId} />
            {showSelectedDropDown()}
            <DeleteTaskMutation modalRef={deleteModalRef}>
                {({ doDeleteTask, loading }) => {
                    const doFunc = () => {
                        doDeleteTask(
                            currentTask._id,
                            getListId(),
                            currentModule._id
                        );
                    };
                    return (
                        <DeleteModal
                            modalRef={deleteModalRef}
                            title={`Delete Task: ${currentTask.name}?`}
                            doFunc={() => doFunc()}
                            loading={loading}
                        />
                    );
                }}
            </DeleteTaskMutation>
        </>
    );
};

TasksSection.propTypes = {
    lists: PropTypes.array,
    moduleId: PropTypes.string,
};
