import React from 'react';
import { ImageStyled } from './styles';
import PropTypes from 'prop-types';
import NoImage from '../../assets/images/no_image.png';
export const Image = ({
    size,
    src,
    description,
    onClicked,
    margin,
    radius,
}) => {
    /* const srcDefault =
        'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'; */
    return (
        <ImageStyled
            size={size}
            src={src || NoImage}
            alt={description || 'Image'}
            onClick={onClicked}
            margin={margin}
            radius={radius}
        />
    );
};

Image.propTypes = {
    size: PropTypes.number,
    src: PropTypes.string,
    onClicked: PropTypes.func,
    margin: PropTypes.string,
    description: PropTypes.string,
    radius: PropTypes.string,
};
