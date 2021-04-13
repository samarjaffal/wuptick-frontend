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

export const NotificationComment = ({ notification, setRead }) => {
    const { external_id: task } = notification;

    const goToNotification = () => {
        navigate(notification.url);
        setRead([notification._id]);
    };

    return (
        <Notification notification={notification}>
            <FontAwesomeIcon icon="comment-alt" color={Colors.blue} />
            <GoToNotification onClick={() => goToNotification()}>
                <NotificationDescription>
                    <NotificationType>New comment: </NotificationType>
                    {task.name}
                </NotificationDescription>
            </GoToNotification>
        </Notification>
    );
};

NotificationComment.propTypes = {
    notification: PropTypes.object,
};
