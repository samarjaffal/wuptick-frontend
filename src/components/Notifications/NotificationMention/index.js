import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Notification } from '../Notification';
import { Colors } from '../../../assets/css/colors';
import {
    NotificationDescription,
    NotificationType,
    GoToNotification,
} from './styles';

export const NotificationMention = ({ notification, setRead }) => {
    const { external_id: task } = notification;

    const goToNotification = () => {
        navigate(notification.url);
        setRead([notification._id]);
    };

    return (
        <Notification notification={notification}>
            <FontAwesomeIcon icon="at" color={Colors.primary} />
            <GoToNotification onClick={() => goToNotification()}>
                <NotificationDescription>
                    <NotificationType>New mention: </NotificationType>
                    {task.name}
                </NotificationDescription>
            </GoToNotification>
        </Notification>
    );
};

NotificationMention.propTypes = {
    notification: PropTypes.object,
};
