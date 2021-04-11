import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Notification } from '../Notification';
import { Colors } from '../../../assets/css/colors';
import { NotificationDescription } from './styles';

export const NotificationMention = () => {
    return (
        <Notification>
            <FontAwesomeIcon icon="at" color={Colors.primary} />
            <NotificationDescription>
                Lorem Ipsum is simply. Lorem Ipsum is simply Lorem Ipsum is
                simple is ter...
            </NotificationDescription>
        </Notification>
    );
};

NotificationMention.propTypes = {};
