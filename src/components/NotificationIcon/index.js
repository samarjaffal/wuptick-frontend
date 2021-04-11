import React from 'react';
import PropTypes from 'prop-types';
import { NewNotification } from './styles';

export const NotificationIcon = ({ color }) => {
    return <NewNotification icon="circle" color={color} />;
};

NotificationIcon.propTypes = {
    color: PropTypes.string,
};
