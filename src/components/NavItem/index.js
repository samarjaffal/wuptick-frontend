import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { NavAnchor, NavAnchorTitle, NavLink } from './styles';

export const NavItem = ({ title, icon, url, option }) => {
    return (
        <NavLink>
            <NavAnchor to={url} option={option}>
                <FontAwesomeIcon icon={icon} />
                <NavAnchorTitle>{title}</NavAnchorTitle>
            </NavAnchor>
        </NavLink>
    );
};

NavItem.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    url: PropTypes.string,
    option: PropTypes.string,
    children: PropTypes.node,
};
