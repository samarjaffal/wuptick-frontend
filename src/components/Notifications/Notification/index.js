import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import { NotificationIcon } from '../../NotificationIcon/index';
import { HideNotificationButton } from '../HideNotificationButton';
import { Colors } from '../../../assets/css/colors';
import { FlexCenter, FlexSpaceBetween } from '../../SharedComponents/styles';
import { Notification as NotificationStyled, Date, Container } from './styles';

export const Notification = ({ notification = {}, children }) => {
    const [isNew, setNew] = useState(Boolean(notification.read_at == null));
    const [isParentHover, setIsParentHover] = useState(false);

    useEffect(() => {
        setNew(Boolean(notification.read_at == null));
    }, [notification]);

    const formatDate = (_date) => {
        dayjs.extend(calendar);
        let dateFormated = dayjs(_date).calendar();
        return dateFormated;
    };
    return (
        <Container
            onMouseEnter={() => setIsParentHover(true)}
            onMouseLeave={() => setIsParentHover(false)}
        >
            <NotificationStyled>
                <FlexSpaceBetween customProps="margin-right:0.8em; width:100%;">
                    <FlexCenter customProps="margin-left:0.8em;">
                        {isNew && <NotificationIcon color={Colors.green} />}
                        {children}
                    </FlexCenter>
                    <FlexSpaceBetween>
                        <Date>{formatDate(notification.created_at)}</Date>
                    </FlexSpaceBetween>
                </FlexSpaceBetween>
            </NotificationStyled>
            <HideNotificationButton
                isHover={isParentHover}
                notification={notification}
            />
        </Container>
    );
};

Notification.propTypes = {
    children: PropTypes.node,
    notification: PropTypes.object,
};
