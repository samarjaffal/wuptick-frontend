import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from '../../../shared/Notification';
import { SetNotificationAsReadMutation } from '../../../requests/Notifications/SetNotificationAsReadMutation';
import { Button } from '../../../components/SharedComponents/styles';
import { Colors } from '../../../assets/css/colors';

export const ButtonMarkAllAsRead = ({ notifications }) => {
    const { addNotification, customTypes, customTitles } = Notification();

    const isNewNotification = (notification) => notification.read_at == null;

    const getNewNotifications = () => {
        return notifications
            .filter(isNewNotification)
            .map((notification) => notification._id);
    };

    const setAllNotificationsAsRead = async (doSet) => {
        let newNotifications = getNewNotifications();
        if (newNotifications.length == 0) {
            return addNotification(
                customTitles.info,
                "You don't have new updates.",
                customTypes.info
            );
        }
        await doSet(newNotifications);
        addNotification(
            customTitles.success,
            'All notifications have been marked as read ✅',
            customTypes.success
        );
    };

    return (
        <SetNotificationAsReadMutation>
            {({ doUpdateNotifications }) => (
                <Button
                    margin="0"
                    bg={Colors.white}
                    color={Colors.black}
                    onClick={() =>
                        setAllNotificationsAsRead(doUpdateNotifications)
                    }
                >
                    Mark all as read
                </Button>
            )}
        </SetNotificationAsReadMutation>
    );
};

ButtonMarkAllAsRead.propTypes = {
    notifications: PropTypes.array,
};
