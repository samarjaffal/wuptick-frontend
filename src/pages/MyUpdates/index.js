import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { LoggedLayout } from '../Layouts/LoggedLayout/index';
import { NotificationsList } from './NotificationsList';
import { GetNotificationsQuery } from '../../requests/Notifications/GetNotificationsQuery';
import { SetNotificationAsReadMutation } from '../../requests/Notifications/SetNotificationAsReadMutation';
import {
    FlexSpaceBetween,
    Button,
} from '../../components/SharedComponents/styles';
import { NotificationsContainer, Title } from './styles';
import { Colors } from '../../assets/css/colors';

export const MyUpdates = () => {
    return (
        <LoggedLayout>
            <Helmet>
                <title>Wuptick - My Updates</title>
            </Helmet>
            <div className="Container" style={{ width: '100%' }}>
                <GetNotificationsQuery>
                    {({ data }) => {
                        const { getNotifications: notifications } = data;
                        return (
                            <>
                                <FlexSpaceBetween customProps="width:100%;">
                                    <Title>My Updates</Title>
                                    <Button
                                        margin="0"
                                        bg={Colors.white}
                                        color={Colors.black}
                                    >
                                        Mark all as read
                                    </Button>
                                </FlexSpaceBetween>
                                <NotificationsContainer>
                                    <SetNotificationAsReadMutation>
                                        {({ doUpdateNotifications }) => (
                                            <NotificationsList
                                                notifications={notifications}
                                                setRead={doUpdateNotifications}
                                            />
                                        )}
                                    </SetNotificationAsReadMutation>
                                </NotificationsContainer>
                            </>
                        );
                    }}
                </GetNotificationsQuery>
            </div>
        </LoggedLayout>
    );
};

MyUpdates.propTypes = {};
