import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Circle } from './styles';

export const NotificationsCounter = ({ notifications, size, fontSize }) => {
    const isNewNotification = (notification) => notification.read_at == null;
    const notificationsCount = () => {
        let newNotifications = notifications.filter(isNewNotification);
        return newNotifications.length;
    };

    const [counter, setCounter] = useState(notificationsCount());

    useEffect(() => {
        setCounter(notificationsCount());
    }, [notifications]);

    return counter > 0 ? (
        <Circle size={size} fontSize={fontSize}>
            {counter}
        </Circle>
    ) : (
        ''
    );
};

NotificationsCounter.propTypes = {
    notifications: PropTypes.array,
};
