import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '../../../components/Avatar/index';
import { Anchor, AvatarContainer } from './styles';

export const EditProfileAvatar = ({ user }) => {
    return (
        <AvatarContainer>
            <Avatar hide={false} size={120} src={user.avatar} user={user} />
            <div>
                <Anchor href="#">Change picture</Anchor>
            </div>
        </AvatarContainer>
    );
};

EditProfileAvatar.propTypes = {
    user: PropTypes.object,
};
