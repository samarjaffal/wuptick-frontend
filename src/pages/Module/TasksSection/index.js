import React, { useRef } from 'react';
import { TaskLists } from '../../../components/Task/TaskLists/index';
import { useUser } from '../../../hooks/useUser';
import { useDropdown } from '../../../hooks/useDropdown';
import { useTask } from '../../../hooks/useTask';
import { ListUsersDropdown, TaskItemDropDown } from '../ModuleDropDowns';
import { DeleteModal } from '../../../components/Modal/templates/DeleteModal/index';
import PropTypes from 'prop-types';

export const TasksSection = ({ lists, moduleId }) => {
    const { selectDropDown } = useDropdown();
    const { currentTask } = useUser();
    const { deleteModalRef } = useTask();

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
            {/*   <DeleteProjectMutation modalRef={modalRef}>
                {({ doDeleteProject, loading }) => {
                    const doFunc = () => {
                        doDeleteProject(projectClicked._id, teamClicked._id);
                    };
                    return (
                        <DeleteModal
                            modalRef={modalRef}
                            title={`Delete project: ${projectClicked.name}?`}
                            doFunc={doFunc}
                            loading={loading}
                        />
                    );
                }}
            </DeleteProjectMutation> */}
            <DeleteModal
                modalRef={deleteModalRef}
                title={`Delete Task: ${currentTask.name}?`}
                doFunc={() => console.log('deleted')}
                loading={false}
            />
        </>
    );
};

TasksSection.propTypes = {};
