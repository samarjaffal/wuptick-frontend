import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlRemoveTaskList } from '../graphql/gqlRemoveTaskList';
import { gqlGetTaskListsAndTasks } from '../graphql/gqlGetTaskListsAndTasks';
import { Notification } from '../../shared/Notification';
import PropTypes from 'prop-types';

export const RemoveTaskListMutation = ({ children, modalRef }) => {
    const { addNotification, customTypes, customTitles } = Notification();
    const [removeList, { error, loading, data }] = useMutation(
        gqlRemoveTaskList,
        {
            onCompleted: (data) => {
                console.log('RemoveTaskListMutation', data);
                modalRef.current.closeModal();
                addNotification(
                    customTitles.success,
                    'List Deleted ✅',
                    customTypes.success
                );
            },
        }
    );

    const doRemoveList = useCallback((moduleId, listId) => {
        removeList({
            variables: {
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
    return children({ doRemoveList, loading, error, data });
};

RemoveTaskListMutation.propTypes = {
    children: PropTypes.any,
};
