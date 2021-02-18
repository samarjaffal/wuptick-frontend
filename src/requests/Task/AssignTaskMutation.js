import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlAssignTask } from '../graphql/gqlAssignTask';
import { useUser } from '../../hooks/useUser';
import { gqlGetTaskListsAndTasks } from '../graphql/gqlGetTaskListsAndTasks';
import { gqlGetTask } from '../graphql/gqlgetTask';
import PropTypes from 'prop-types';

export const AssignTaskMutation = ({ children }) => {
    const { currentModule } = useUser();
    const [assignTask, { error, loading, data }] = useMutation(gqlAssignTask, {
        onCompleted: (data) => {
            console.log('AssignTaskMutation', data);
        },
    });

    const doAssignTask = useCallback((taskId, userId) => {
        assignTask({
            variables: {
                taskId,
                userId,
            },
            refetchQueries: [
                {
                    query: gqlGetTaskListsAndTasks,
                    variables: { moduleId: currentModule._id },
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
    return children({ doAssignTask, loading, error, data });
};

AssignTaskMutation.propTypes = {
    children: PropTypes.any,
};
