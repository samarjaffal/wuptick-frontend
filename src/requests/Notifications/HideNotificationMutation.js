import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlHideNotification } from '../graphql/gqlHideNotification';
import { gqlGetNotifications } from '../graphql/gqlGetNotifications';
import PropTypes from 'prop-types';

export const HideNotificationMutation = ({ children }) => {
    const [hideNotification, { error, loading, data }] = useMutation(
        gqlHideNotification,
        {
            onCompleted: (data) => {
                console.log('HideNotificationMutation', data);
            },
        }
    );

    const doHideNotification = useCallback((ids) => {
        hideNotification({
            variables: {
                ids,
            },
            refetchQueries: [
                {
                    query: gqlGetNotifications,
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
    return children({ doHideNotification, loading, error, data });
};

HideNotificationMutation.propTypes = {
    children: PropTypes.any,
};
