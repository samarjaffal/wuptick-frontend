import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from '../Notification';
import { config } from '../../../../config/index';
import { Avatar } from '../../Avatar/index';
import { Me } from '../../Me/index';
import { SkeletonAvatar } from '../../Loaders/SkeletonAvatar/index';
import {
    NotificationDescription,
    NotificationType,
    GoToNotification,
} from './styles';

export const NotificationAssignation = ({ notification, setRead }) => {
    const { external_id: task } = notification;

    const goToNotification = () => {
        window.open(`${config.url}${notification.url}`, '_blank').focus();
        setRead([notification._id]);
    };

    return (
        <Notification notification={notification}>
            <Me loader={SkeletonAvatar} loaderProps={{ qty: 1, size: 20 }}>
                {({ avatar }) => <Avatar size={20} src={avatar} hide={false} />}
            </Me>
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