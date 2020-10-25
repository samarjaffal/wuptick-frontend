import React from 'react';
import { Button, Icon, Anchor } from './styles';
import PropTypes from 'prop-types';

export const ButtonHome = ({
    icon,
    color,
    url,
    onClicked,
    margin,
    children,
}) => {
    const handleClick = () => {
        if (onClicked == null) return;
        onClicked();
    };

    return (
        <Anchor
            to={url}
            margin={margin}
            color={color}
            onClick={() => handleClick()}
        >
            <Button>
                <Icon icon={icon} color={color} style={{ margin: 'auto' }} />{' '}
                {''}
                {children}
            </Button>
        </Anchor>
    );
};

ButtonHome.propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string,
    url: PropTypes.string,
    onClicked: PropTypes.func,
    margin: PropTypes.string,
    children: PropTypes.any,
};
