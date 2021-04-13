import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlSetNotificationAsRead } from '../graphql/gqlSetNotificationAsRead';
import { gqlGetNotifications } from '../graphql/gqlGetNotifications';
import PropTypes from 'prop-types';

export const SetNotificationAsReadMutation = ({ children }) => {
    const [updateNotifications, { error, loading, data }] = useMutation(
        gqlSetNotificationAsRead,
        {
            onCompleted: (data) => {
                console.log('SetNotificationAsReadMutation', data);
            },
        }
    );

    const doUpdateNotifications = useCallback((ids) => {
        updateNotifications({
            variables: {
                ids,
            },
            /* refetchQueries: [
                {
                    query: gqlGetNotifications,
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
    return children({ doUpdateNotifications, loading, error, data });
};

SetNotificationAsReadMutation.propTypes = {
    children: PropTypes.any,
};
