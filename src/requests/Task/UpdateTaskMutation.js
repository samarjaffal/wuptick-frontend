import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlUpdateTask } from '../graphql/gqlUpdateTask';
import { useUser } from '../../hooks/useUser';
import { gqlGetTaskListsAndTasks } from '../graphql/gqlGetTaskListsAndTasks';
import { gqlGetTask } from '../graphql/gqlgetTask';
import PropTypes from 'prop-types';

export const UpdateTaskMutation = ({ children }) => {
    const [updateTask, { error, loading, data }] = useMutation(gqlUpdateTask, {
        onCompleted: (data) => {
            console.log('UpdateTaskMutation', data);
        },
    });

    const doUpdateTask = useCallback((taskId, input, moduleId, url) => {
        updateTask({
            variables: {
                taskId,
                input,
                url,
            },
            refetchQueries: [
                {
                    query: gqlGetTaskListsAndTasks,
                    variables: { moduleId },
                },
                {
                    query: gqlGetTask,
                    variables: { taskId },
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
    return children({ doUpdateTask, loading, error, data });
};

UpdateTaskMutation.propTypes = {
    children: PropTypes.any,
};
