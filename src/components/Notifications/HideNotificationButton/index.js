import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HideNotificationMutation } from '../../../requests/Notifications/HideNotificationMutation';
import { RemoveButton } from './styles';

export const HideNotificationButton = ({ isHover, notification }) => {
    const hideNotification = (doHide) => doHide(notification._id);

    return (
        <HideNotificationMutation>
            {({ doHideNotification }) => (
                <RemoveButton
                    isHover={isHover ? 1 : 0}
                    onClick={() => hideNotification(doHideNotification)}
                >
                    <FontAwesomeIcon icon="times" />
                </RemoveButton>
            )}
        </HideNotificationMutation>
    );
};

HideNotificationButton.propTypes = {
    isHover: PropTypes.bool,
    notification: PropTypes.object,
};
