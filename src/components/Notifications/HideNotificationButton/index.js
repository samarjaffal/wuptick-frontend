import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RemoveButton } from './styles';

export const HideNotificationButton = ({ isHover }) => {
    return (
        <RemoveButton isHover={isHover ? 1 : 0}>
            <FontAwesomeIcon icon="times" />
        </RemoveButton>
    );
};

HideNotificationButton.propTypes = {
    isHover: PropTypes.bool,
};
