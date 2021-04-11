import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { LoggedLayout } from '../Layouts/LoggedLayout/index';
import { NotificationAssignation } from '../../components/Notifications/NotificationAssignation/index';
import { NotificationMention } from '../../components/Notifications/NotificationMention/index';
import { NotificationComment } from '../../components/Notifications/NotificationComment/index';
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
                <FlexSpaceBetween customProps="width:100%;">
                    <Title>My Updates</Title>
                    <Button margin="0" bg={Colors.white} color={Colors.black}>
                        Mark all as read
                    </Button>
                </FlexSpaceBetween>

                <NotificationsContainer>
                    <NotificationComment />
                    <NotificationAssignation />
                    <NotificationMention />
                </NotificationsContainer>
            </div>
        </LoggedLayout>
    );
};

MyUpdates.propTypes = {};
