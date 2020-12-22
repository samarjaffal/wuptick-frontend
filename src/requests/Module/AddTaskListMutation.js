import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlAddTaskList } from '../graphql/gqlAddTaskList';
import { gqlGetTaskListsAndTasks } from '../graphql/gqlGetTaskListsAndTasks';
import PropTypes from 'prop-types';

export const AddTaskListMutation = ({ children }) => {
    const [addList, { error, loading, data }] = useMutation(gqlAddTaskList, {
        onCompleted: (data) => {
            console.log('AddTaskListMutation', data);
        },
    });

    const doCreateList = useCallback((moduleId, name) => {
        addList({
            variables: {
                moduleId,
                name,
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
    return children({ doCreateList, loading, error, data });
};

AddTaskListMutation.propTypes = {
    children: PropTypes.any,
};
