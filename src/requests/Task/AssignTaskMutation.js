import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlAssignTask } from '../graphql/gqlAssignTask';
import { useUser } from '../../hooks/useUser';
import { gqlGetTaskListsAndTasks } from '../graphql/gqlGetTaskListsAndTasks';
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
            ],
            /*   update: (store) => {
                const listsData = store.readQuery({
                    query: gqlGetTaskListsAndTasks,
                    variables: { moduleId: currentModule._id },
                });
                console.log(listsData, 'invitationsData');

                let list = listsData.getModule.task_lists.find((list) =>
                    list.tasks.find((task) => task._id == taskId)
                );

                list.tasks.forEach((task) => {
                    if (task._id == taskId) {
                        task.assigned = userId;
                    }
                });

                console.log(list, 'list');

                let tempListData = listsData.getModule;

                let newLists = [
                    ...new Map(
                        tempListData.task_lists.map((item) => [item._id, item])
                    ).values(),
                ];

                tempListData.task_lists = newLists;

                store.writeQuery({
                    query: gqlGetTaskListsAndTasks,
                    variables: { moduleId: currentModule._id },
                    data: {
                        getModule: {
                            ...tempListData,
                        },
                    },
                });
            }, */
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
