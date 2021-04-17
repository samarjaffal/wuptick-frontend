import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NoImage from '../../assets/images/no_image.png';
import { useAvatar } from '../../hooks/useAvatar';
import { Avatar as AvatarStyled } from './styles';

export const Avatar = ({ size, src, onClicked, margin, hide = true, user }) => {
    const { generateAvatar } = useAvatar(user);

    let avatar = src || generateAvatar();

    return (
        <AvatarStyled
            size={size}
            src={avatar}
            alt="avatar"
            onClick={onClicked}
            margin={margin}
            hide={hide}
        />
    );
};

Avatar.propTypes = {
    size: PropTypes.number,
    src: PropTypes.string,
    onClicked: PropTypes.func,
    margin: PropTypes.string,
    hide: PropTypes.bool,
    user: PropTypes.object,
};
