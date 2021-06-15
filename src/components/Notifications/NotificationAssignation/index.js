import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Notification } from '../Notification';
import { config } from '../../../../config/index';
import { Avatar } from '../../Avatar/index';
import {
    NotificationDescription,
    NotificationType,
    GoToNotification,
} from './styles';

export const NotificationAssignation = ({ notification, setRead }) => {
    const { external_id: task } = notification;

    useEffect(() => { }, [])

    const goToNotification = () => {
        window.open(`${config.url}${notification.url}`, '_blank').focus();
        setRead([notification._id]);
    };

    return (
        <Notification notification={notification}>
            <Avatar size={20} src={notification.recipient.avatar} hide={false} user={notification.recipient} />
            <GoToNotification onClick={() => goToNotification()}>
                <NotificationDescription>
                    <NotificationType>New assignation: </NotificationType>
                    {task.name}
                </NotificationDescription>
            </GoToNotification>
        </Notification>
    );
};

NotificationAssignation.propTypes = {
    notification: PropTypes.object,
};
