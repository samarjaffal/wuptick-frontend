import React from 'react';
import { MenuItem, IconButton, IconRight } from './styles';
import { useDropdown } from '../../hooks/useDropdown';
import PropTypes from 'prop-types';

export const DropdownItem = ({ goToMenu, leftIcon, rightIcon, children }) => {
    const { setActiveMenu } = useDropdown();
    return (
        <MenuItem to="#" onClick={() => goToMenu && setActiveMenu(goToMenu)}>
            <IconButton>{leftIcon}</IconButton>
            {children}
            <IconRight>{rightIcon}</IconRight>
        </MenuItem>
    );
};

DropdownItem.propTypes = {
    goToMenu: PropTypes.string,
    leftIcon: PropTypes.any,
    rightIcon: PropTypes.any,
    children: PropTypes.node.isRequired,
};
