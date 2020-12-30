import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlDeleteTask } from '../graphql/gqlDeleteTask';
import { gqlGetTaskListsAndTasks } from '../graphql/gqlGetTaskListsAndTasks';
import { Notification } from '../../shared/Notification';
import PropTypes from 'prop-types';

export const DeleteTaskMutation = ({ children, modalRef }) => {
    const { addNotification, customTypes, customTitles } = Notification();
    const [deleteTask, { error, loading, data }] = useMutation(gqlDeleteTask, {
        onCompleted: (data) => {
            console.log('DeleteTaskMutation', data);
            modalRef.current.closeModal();
            addNotification(
                customTitles.success,
                'Task Deleted ✅',
                customTypes.success
            );
        },
    });

    const doDeleteTask = useCallback((taskId, listId, moduleId) => {
        deleteTask({
            variables: {
                taskId,
                listId,
                moduleId,
            },
            refetchQueries: [
                {
                    query: gqlGetTaskListsAndTasks,
                    variables: { moduleId },
                },
            ],
        });
    });

    if (loading) {
        console.log('loading');
    }

    if (error) {
        console.error(error, 'error');
    }
    return children({ doDeleteTask, loading, error, data });
};

DeleteTaskMutation.propTypes = {
    children: PropTypes.any,
};
