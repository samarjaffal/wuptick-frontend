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

    return url ? (
        <Anchor to={url} margin={margin} color={color}>
            <Button>
                <Icon icon={icon} color={color} style={{ margin: 'auto' }} />{' '}
                {''}
                {children}
            </Button>
        </Anchor>
    ) : (
        <Button onClick={() => handleClick()}>
            <Icon icon={icon} color={color} style={{ margin: 'auto' }} /> {''}
            {children}
        </Button>
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
