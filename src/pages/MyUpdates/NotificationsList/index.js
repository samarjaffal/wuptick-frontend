import React from 'react';
import PropTypes from 'prop-types';
import { NotificationAssignation } from '../../../components/Notifications/NotificationAssignation/index';
import { NotificationMention } from '../../../components/Notifications/NotificationMention/index';
import { NotificationComment } from '../../../components/Notifications/NotificationComment/index';
import { Ul } from '../../../components/SharedComponents/styles';

export const NotificationsList = ({ notifications, setRead }) => {
    const handleNotification = (notification) => {
        return (
            (notification.type == 'task_comment' && (
                <NotificationComment
                    notification={notification}
                    setRead={setRead}
                />
            )) ||
            (notification.type == 'task_assignation' && (
                <NotificationAssignation
                    notification={notification}
                    setRead={setRead}
                />
            )) ||
            (notification.type == 'task_mention' && (
                <NotificationMention
                    notification={notification}
                    setRead={setRead}
                />
            ))
        );
    };

    return (
        <Ul>
            {notifications.map((notification, index) => (
                <li key={index}>{handleNotification(notification)}</li>
            ))}
        </Ul>
    );
};

NotificationsList.propTypes = {
    notifications: PropTypes.array,
};
