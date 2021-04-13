import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Notification } from '../Notification';
import { Colors } from '../../../assets/css/colors';
import {
    NotificationDescription,
    NotificationType,
    GoToNotification,
} from './styles';

export const NotificationComment = ({ notification }) => {
    const { external_id: task } = notification;
    return (
        <Notification notification={notification}>
            <FontAwesomeIcon icon="comment-alt" color={Colors.blue} />
            <GoToNotification to={`/${notification.url}`}>
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
