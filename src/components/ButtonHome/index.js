import React from 'react';
import { Link } from '@reach/router';
import { Button, Icon } from './styles';
import PropTypes from 'prop-types';

export const ButtonHome = ({ icon, color, url, onClicked }) => {
    return (
        <Link to={url}>
            <Button>
                <Icon icon={icon} color={color} style={{ margin: 'auto' }} />
            </Button>
        </Link>
    );
};

ButtonHome.propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string,
    url: PropTypes.string,
    onClicked: PropTypes.func,
};
