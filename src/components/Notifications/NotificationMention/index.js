import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '../../../../config/index';
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
        window.open(`${config.url}${notification.url}`, '_blank').focus();
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
