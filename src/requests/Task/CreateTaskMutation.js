import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlCreateTask } from '../graphql/gqlCreateTask';
import { gqlGetTaskListsAndTasks } from '../graphql/gqlGetTaskListsAndTasks';
import PropTypes from 'prop-types';

export const CreateTaskMutation = ({ children }) => {
    const [addTask, { error, loading, data }] = useMutation(gqlCreateTask, {
        onCompleted: (data) => {
            console.log('AddTaskListMutation', data);
        },
    });

    const doAddTask = useCallback((input, moduleId, listId) => {
        addTask({
            variables: {
                input,
                moduleId,
                listId,
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
    return children({ doAddTask, loading, error, data });
};

CreateTaskMutation.propTypes = {
    children: PropTypes.any,
};
