import React from 'react';
import PropTypes from 'prop-types';
import { DeleteTaskMutation } from '../../../requests/Task/DeleteTaskMutation';
import { RemoveTaskListMutation } from '../../../requests/Module/RemoveTaskListMutation';
import { DeleteModal as DeleteModalComponent } from '../../../components/Modal/templates/DeleteModal/index';
import { useUser } from '../../../hooks/useUser';
import { useTask } from '../../../hooks/useTask';

export const DeleteModal = ({ getListId }) => {
    const { currentTask, currentModule } = useUser();
    const {
        deleteModalRef,
        elemType,
        currentList,
        beforeDeleteTask,
        setBeforeDeleteTask,
    } = useTask();

    return (
        (elemType == 'list' && (
            <RemoveTaskListMutation modalRef={deleteModalRef}>
                {({ doRemoveList, loading }) => (
                    <DeleteModalComponent
                        modalRef={deleteModalRef}
                        title={`Delete List: ${currentList.name}?`}
                        doFunc={() =>
                            doRemoveList(currentModule._id, currentList._id)
                        }
                        loading={loading}
                    />
                )}
            </RemoveTaskListMutation>
        )) ||
        (elemType == 'task' && (
            <DeleteTaskMutation modalRef={deleteModalRef}>
                {({ doDeleteTask, loading }) => {
                    const doFunc = () => {
                        if (beforeDeleteTask !== null) {
                            beforeDeleteTask();
                        }
                        doDeleteTask(
                            currentTask._id,
                            getListId(),
                            currentModule._id
                        );
                        setBeforeDeleteTask(null);
                    };
                    return (
                        <DeleteModalComponent
                            modalRef={deleteModalRef}
                            title={`Delete Task: ${currentTask.name}?`}
                            doFunc={() => doFunc()}
                            loading={loading}
                        />
                    );
                }}
            </DeleteTaskMutation>
        )) ||
        null
    );
};

DeleteModal.propTypes = {};
