import React from 'react';
import { Avatar as AvatarStyled } from './styles';
import PropTypes from 'prop-types';

export const Avatar = ({ size, src, onClicked, margin }) => {
    src =
        'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ';
    return (
        <AvatarStyled
            size={size}
            src={src}
            alt="avatar"
            onClick={onClicked}
            margin={margin}
        />
    );
};

Avatar.propTypes = {
    size: PropTypes.number,
    src: PropTypes.string,
    onClicked: PropTypes.func,
    margin: PropTypes.string,
};
