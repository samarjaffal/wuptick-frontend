import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlUpdateTask } from '../graphql/gqlUpdateTask';
import { useUser } from '../../hooks/useUser';
import { gqlGetTaskListsAndTasks } from '../graphql/gqlGetTaskListsAndTasks';
import PropTypes from 'prop-types';

export const UpdateTaskMutation = ({ children }) => {
    const { currentModule } = useUser();
    const [updateTask, { error, loading, data }] = useMutation(gqlUpdateTask, {
        onCompleted: (data) => {
            console.log('UpdateTaskMutation', data);
        },
    });

    const doUpdateTask = useCallback((taskId, input) => {
        updateTask({
            variables: {
                taskId,
                input,
            },
            refetchQueries: [
                {
                    query: gqlGetTaskListsAndTasks,
                    variables: { moduleId: currentModule._id },
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
