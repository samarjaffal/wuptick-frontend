import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlEditTaskList } from '../graphql/gqlEditTaskList';
import { gqlGetTaskListsAndTasks } from '../graphql/gqlGetTaskListsAndTasks';
import PropTypes from 'prop-types';

export const EditTaskListMutation = ({ children }) => {
    const [editList, { error, loading, data }] = useMutation(gqlEditTaskList, {
        onCompleted: (data) => {
            console.log('EditTaskListMutation', data);
        },
    });

    const doEditList = useCallback((moduleId, listId, name) => {
        editList({
            variables: {
                moduleId,
                listId,
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
    return children({ doEditList, loading, error, data });
};

EditTaskListMutation.propTypes = {
    children: PropTypes.any,
};
