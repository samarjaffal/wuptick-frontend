import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlMe } from '../graphql/gqlMe';
import { gqlToggleFavTask } from '../graphql/gqlToggleFavTask';
import PropTypes from 'prop-types';

export const ToggleFavTaskMutation = ({ children }) => {
    const [toggleFav, { error, loading, data }] = useMutation(
        gqlToggleFavTask,
        {
            onCompleted: (data) => {
                console.log('ToggleFavTaskMutation', data);
            },
        }
    );

    const doToggleFav = useCallback((state, taskId) => {
        toggleFav({
            variables: {
                state,
                taskId,
            },
            /* 
            refetchQueries:[
                {
                    query: gqlMe
                }
            ] */
            update: (store) => {
                const meData = store.readQuery({
                    query: gqlMe,
                });

                let tempMeData = { ...meData.me };

                if (state) {
                    /*  tempMeData.favorite_tasks.push({
                        _id: taskId,
                        __typename: 'Task',
                    }); */

                    let newArray = [
                        ...tempMeData.favorite_tasks,
                        { _id: taskId, __typename: 'Task' },
                    ];
                    tempMeData.favorite_tasks = newArray;
                } else {
                    let newArray = tempMeData.favorite_tasks.filter(
                        (task) => task._id !== taskId
                    );
                    tempMeData.favorite_tasks = newArray;
                }

                store.writeQuery({
                    query: gqlMe,
                    data: {
                        me: {
                            ...tempMeData,
                        },
                    },
                });
            },
        });
    });

    if (loading) {
        console.log('loading');
    }

    if (error) {
        console.error(error, 'error');
    }
    return children({ doToggleFav, loading, error, data });
};

ToggleFavTaskMutation.propTypes = {
    children: PropTypes.any,
};
