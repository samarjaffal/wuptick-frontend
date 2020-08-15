import React, { useState, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Dropdown, Menu, MenuItem, IconButton, IconRight } from './styles';
import { Transitions } from './Transitions.js';

export const DropdownMenu = () => {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    }, []);

    const calcHeight = (el) => {
        const height = el.offsetHeight;
        setMenuHeight(height);
    };

    const DropdownItem = ({ goToMenu, leftIcon, rightIcon, children }) => {
        return (
            <MenuItem
                to="#"
                onClick={() => goToMenu && setActiveMenu(goToMenu)}
            >
                <IconButton>{leftIcon}</IconButton>
                {children}
                <IconRight>{rightIcon}</IconRight>
            </MenuItem>
        );
    };

    return (
        <Dropdown style={{ height: menuHeight }} ref={dropdownRef}>
            <Transitions />
            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <Menu>
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem goToMenu="settings">Settings</DropdownItem>
                    <DropdownItem leftIcon="🦧" goToMenu="animals">
                        Animals
                    </DropdownItem>
                </Menu>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <Menu>
                    <DropdownItem goToMenu="main" leftIcon="🧡">
                        <h2>My Tutorial</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🧡">HTML</DropdownItem>
                    <DropdownItem leftIcon="🧡">CSS</DropdownItem>
                    <DropdownItem leftIcon="🧡">JavaScript</DropdownItem>
                    <DropdownItem leftIcon="🧡">Awesome!</DropdownItem>
                </Menu>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'animals'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <Menu>
                    <DropdownItem goToMenu="main" leftIcon="🧡">
                        <h2>Animals</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
                    <DropdownItem leftIcon="🐸">Frog</DropdownItem>
                    <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
                    <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
                </Menu>
            </CSSTransition>
        </Dropdown>
    );
};
