import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Notification } from '../Notification';
import { Colors } from '../../../assets/css/colors';
import { NotificationDescription, NotificationType } from './styles';

export const NotificationMention = ({ notification }) => {
    const { external_id: task } = notification;

    return (
        <Notification notification={notification}>
            <FontAwesomeIcon icon="at" color={Colors.primary} />
            <NotificationDescription>
                <NotificationType>New mention: </NotificationType>
                {task.name}
            </NotificationDescription>
        </Notification>
    );
};

NotificationMention.propTypes = {
    notification: PropTypes.object,
};
