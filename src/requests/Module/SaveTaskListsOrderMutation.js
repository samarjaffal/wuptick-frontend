import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlSaveTaskListsOrder } from '../graphql/gqlSaveTaskListsOrder';
import PropTypes from 'prop-types';

export const SaveTaskListsOrderMutation = ({ children }) => {
    const [saveOrder, { error, loading, data }] = useMutation(
        gqlSaveTaskListsOrder,
        {
            onCompleted: (data) => {
                console.log('SaveTaskListsOrderMutation', data);
            },
        }
    );

    const doSaveOrder = useCallback((moduleId, taskLists) => {
        const keyToDelete = '__typename';
        taskLists.forEach((list) => {
            delete list[keyToDelete];
        });

        saveOrder({
            variables: {
                moduleId,
                taskLists,
            },
        });
    });
    /* 
    if (loading) {
        console.log('loading');
    } */

    if (error) {
        console.error(error, 'error');
    }
    return children({ doSaveOrder, loading, error, data });
};

SaveTaskListsOrderMutation.propTypes = {
    children: PropTypes.any,
};
