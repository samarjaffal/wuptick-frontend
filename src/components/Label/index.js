import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Label as LabelStyled } from './styles';

export const Label = ({
    color,
    onClicked = null,
    name,
    icon = null,
    showCaret = false,
    width,
    pointer = false,
    children,
}) => {
    const handleClick = () => {
        if (onClicked == null) return;
        onClicked();
    };
    return (
        <LabelStyled
            color={color}
            onClick={() => handleClick()}
            width={width}
            pointer={pointer}
        >
            <span>
                {icon !== null && `${icon} `}
                {name}
            </span>{' '}
            {showCaret && <FontAwesomeIcon icon="caret-down" color={color} />}
            {children}
        </LabelStyled>
    );
};

Label.propTypes = {
    color: PropTypes.string,
    onClicked: PropTypes.func,
    name: PropTypes.string,
    icon: PropTypes.string,
    showCaret: PropTypes.bool,
    width: PropTypes.string,
    pointer: PropTypes.bool,
    children: PropTypes.any,
};
