import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Notification } from '../Notification';
import { Colors } from '../../../assets/css/colors';
import { NotificationDescription } from './styles';

export const NotificationComment = () => {
    return (
        <Notification>
            <FontAwesomeIcon icon="comment-alt" color={Colors.blue} />
            <NotificationDescription>
                Lorem Ipsum is simply. Lorem Ipsum is simply Lorem Ipsum is
                simple is ter...
            </NotificationDescription>
        </Notification>
    );
};

NotificationComment.propTypes = {};
