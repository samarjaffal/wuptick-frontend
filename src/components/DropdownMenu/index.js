import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Menu } from './styles';
import { useDropdown } from '../../hooks/useDropdown';
import PropTypes from 'prop-types';

export const DropdownMenu = ({ menu, classMenu, children }) => {
    const { activeMenu, calcHeight } = useDropdown();
    return (
        <CSSTransition
            in={activeMenu === menu}
            timeout={500}
            classNames={classMenu}
            unmountOnExit
            onEnter={calcHeight}
        >
            <Menu>{children}</Menu>
        </CSSTransition>
    );
};

DropdownMenu.propTypes = {
    menu: PropTypes.string,
    classMenu: PropTypes.string,
    children: PropTypes.node.isRequired,
};
