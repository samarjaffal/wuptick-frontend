import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from '../Notification';
import { Avatar } from '../../Avatar/index';
import { Me } from '../../Me/index';
import { SkeletonAvatar } from '../../Loaders/SkeletonAvatar/index';
import { NotificationDescription } from './styles';

export const NotificationAssignation = () => {
    return (
        <Notification>
            <Me loader={SkeletonAvatar} loaderProps={{ qty: 1, size: 20 }}>
                {({ avatar }) => <Avatar size={20} src={avatar} hide={false} />}
            </Me>
            <NotificationDescription>
                Lorem Ipsum is simply. Lorem Ipsum is simply Lorem Ipsum is
                simple is ter...
            </NotificationDescription>
        </Notification>
    );
};

NotificationAssignation.propTypes = {};
