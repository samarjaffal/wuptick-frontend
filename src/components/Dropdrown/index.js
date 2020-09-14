import React, { useEffect } from 'react';
import { Dropdown as DropdownContainer } from './styles';
import { Transitions } from './Transitions.js';
import { useDropdown } from '../../hooks/useDropdown';
import PropTypes from 'prop-types';

export const Dropdown = ({ open, children }) => {
    const { menuHeight, dropdownRef, setMenuHeight } = useDropdown();

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    }, []);

    return (
        <DropdownContainer
            style={{ height: menuHeight }}
            ref={dropdownRef}
            open={open}
        >
            <Transitions />
            {children}
        </DropdownContainer>
    );
};

Dropdown.propTypes = {
    children: PropTypes.node.isRequired,
};
