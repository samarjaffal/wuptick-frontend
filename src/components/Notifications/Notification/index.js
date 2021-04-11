import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import { NotificationIcon } from '../../NotificationIcon/index';
import { Colors } from '../../../assets/css/colors';
import { FlexCenter, FlexSpaceBetween } from '../../SharedComponents/styles';
import { Notification as NotificationStyled, Date } from './styles';

export const Notification = ({ notification = {}, children }) => {
    const [isNew, setNew] = useState(Boolean(notification.read_at == null));

    const formatDate = (_date) => {
        dayjs.extend(calendar);
        let dateFormated = dayjs(_date).calendar();
        return dateFormated;
    };
    return (
        <NotificationStyled>
            <FlexSpaceBetween customProps="margin-right:0.8em; width:100%;">
                <FlexCenter customProps="margin-left:0.8em;">
                    {isNew && <NotificationIcon color={Colors.green} />}
                    {children}
                </FlexCenter>
                <div>
                    <Date>{formatDate(notification.created_at)}</Date>
                </div>
            </FlexSpaceBetween>
        </NotificationStyled>
    );
};

Notification.propTypes = {
    children: PropTypes.node,
};
