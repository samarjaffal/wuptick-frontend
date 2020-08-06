import React from 'react';
import { AlertContainer, AlertMessage } from './style';

export const FormAlert = ({ message, icon }) => {
    return (
        <AlertContainer>
            <span>{icon}</span>
            <AlertMessage>{message}</AlertMessage>
        </AlertContainer>
    );
};
