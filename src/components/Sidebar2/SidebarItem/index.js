import React from 'react';
import PropTypes from 'prop-types';
import { NotificationsCounter } from '../../NotificationsCounter/index';
import { GetNotificationsQuery } from '../../../requests/Notifications/GetNotificationsQuery';
import {
    SideAnchor,
    Title,
    SidebarLink,
    Container,
    Icon,
    IconContainer,
} from './styles';

export const SidebarItem = ({
    title,
    icon,
    url,
    color,
    children,
    hasNotifications = false,
}) => {
    return (
        <SidebarLink>
            <Container>
                <SideAnchor to={url} color={color}>
                    <IconContainer>
                        <Icon icon={icon} />
                    </IconContainer>
                    <Title>
                        {title}{' '}
                        {hasNotifications && (
                            <GetNotificationsQuery>
                                {({ data }) => {
                                    const {
                                        getNotifications: notifications,
                                    } = data;
                                    return (
                                        <NotificationsCounter
                                            notifications={notifications}
                                            size={18}
                                            fontSize={10}
                                        />
                                    );
                                }}
                            </GetNotificationsQuery>
                        )}
                    </Title>
                </SideAnchor>
            </Container>
            {children}
        </SidebarLink>
    );
};

SidebarItem.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    url: PropTypes.string,
    option: PropTypes.string,
    children: PropTypes.node,
    color: PropTypes.string,
};
