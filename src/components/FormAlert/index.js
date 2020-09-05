import React from 'react';
import { AlertContainer, AlertMessage } from './style';
import PropTypes from 'prop-types';

export const FormAlert = ({ message, icon }) => {
    return (
        <AlertContainer>
            <span>{icon}</span>
            <AlertMessage>{message}</AlertMessage>
        </AlertContainer>
    );
};

FormAlert.propTypes = {
    message: PropTypes.string.isRequired,
    icon: PropTypes.string,
};
