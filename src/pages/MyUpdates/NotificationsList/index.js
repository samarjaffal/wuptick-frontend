import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NotificationAssignation } from '../../../components/Notifications/NotificationAssignation/index';
import { NotificationMention } from '../../../components/Notifications/NotificationMention/index';
import { NotificationComment } from '../../../components/Notifications/NotificationComment/index';
import { Ul } from '../../../components/SharedComponents/styles';

export const NotificationsList = ({ notifications, setRead }) => {
    const isNotHiden = (notification) => !notification.hide;
    const isValid = notification => notification.external_id !== null;

    const filterNotifications = () => notifications.filter(isNotHiden && isValid);

    const [filteredNotifications, setNotifications] = useState(() =>
        filterNotifications(notifications)
    );

    useEffect(() => {
        setNotifications(filterNotifications(notifications));
    }, [notifications]);

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
            {filteredNotifications.map((notification, index) => (
                <li key={index}>{handleNotification(notification)}</li>
            ))}
        </Ul>
    );
};

NotificationsList.propTypes = {
    notifications: PropTypes.array,
    setRead: PropTypes.func,
};
