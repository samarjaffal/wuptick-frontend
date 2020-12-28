import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlAssignTask } from '../graphql/gqlAssignTask';
import { gqlAddDeadlineToTask } from '../graphql/gqlAddDeadlineToTask';
import PropTypes from 'prop-types';

export const AddDeadlineToTaskMutation = ({ children }) => {
    const [addDeadline, { error, loading, data }] = useMutation(
        gqlAddDeadlineToTask,
        {
            onCompleted: (data) => {
                console.log('AddDeadlineToTaskMutation', data);
            },
        }
    );

    const doAddDeadline = useCallback((taskId, date) => {
        addDeadline({
            variables: {
                taskId,
                date,
            },
            /*  refetchQueries: [
                {
                    query: gqlGetTaskListsAndTasks,
                    variables: { moduleId: currentModule._id },
                },
            ], */
        });
    });

    if (loading) {
        console.log('loading');
    }

    if (error) {
        console.error(error, 'error');
    }
    return children({ doAddDeadline, loading, error, data });
};

AddDeadlineToTaskMutation.propTypes = {
    children: PropTypes.any,
};
