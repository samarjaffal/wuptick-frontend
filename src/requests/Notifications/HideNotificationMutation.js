import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { Notification } from '../../shared/Notification';
import { gqlHideNotification } from '../graphql/gqlHideNotification';
import { gqlGetNotifications } from '../graphql/gqlGetNotifications';
import PropTypes from 'prop-types';

export const HideNotificationMutation = ({ children }) => {
    const { addNotification, customTypes, customTitles } = Notification();
    const [hideNotification, { error, loading, data }] = useMutation(
        gqlHideNotification,
        {
            onCompleted: (data) => {
                console.log('HideNotificationMutation', data);
                addNotification(
                    customTitles.success,
                    'Notification removed ✅',
                    customTypes.success
                );
            },
        }
    );

    const doHideNotification = useCallback((id) => {
        hideNotification({
            variables: {
                id,
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
