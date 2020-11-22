import React from 'react';
import { MenuItem, IconButton, IconRight } from './styles';
import { useDropdown } from '../../hooks/useDropdown';
import PropTypes from 'prop-types';

export const DropdownItem = ({
    goToMenu,
    goToURL,
    leftIcon,
    rightIcon,
    onClicked,
    children,
}) => {
    const { setActiveMenu } = useDropdown();

    const handleClick = () => {
        return (
            (onClicked && onClicked()) ||
            (goToMenu && setActiveMenu(goToMenu)) ||
            null
        );
    };

    return (
        <MenuItem to={goToURL || ''} onClick={() => handleClick()}>
            <IconButton>{leftIcon}</IconButton>
            {children}
            <IconRight>{rightIcon}</IconRight>
        </MenuItem>
    );
};

DropdownItem.propTypes = {
    goToMenu: PropTypes.string,
    goToURL: PropTypes.string,
    leftIcon: PropTypes.any,
    rightIcon: PropTypes.any,
    onClicked: PropTypes.func,
    children: PropTypes.node.isRequired,
};
