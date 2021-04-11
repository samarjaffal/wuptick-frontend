import React from 'react';
import PropTypes from 'prop-types';
import { FlexCenter, FlexSpaceBetween } from '../../SharedComponents/styles';
import { Notification as NotificationStyled, Date } from './styles';

export const Notification = ({ children }) => {
    return (
        <NotificationStyled>
            <FlexSpaceBetween customProps="margin-right:0.8em; width:100%;">
                <FlexCenter customProps="margin-left:0.8em;">
                    {/* <NewNotification icon="circle" /> */}
                    {children}
                </FlexCenter>
                <div>
                    <Date>Today 8:00pm</Date>
                </div>
            </FlexSpaceBetween>
        </NotificationStyled>
    );
};

Notification.propTypes = {
    children: PropTypes.node,
};
