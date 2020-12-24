import React, { useEffect } from 'react';
import { Dropdown as DropdownContainer } from './styles';
import { Transitions } from './Transitions.js';
import { useDropdown } from '../../hooks/useDropdown';
import PropTypes from 'prop-types';

export const Dropdown = ({
    open,
    top,
    left,
    width,
    transform,
    bg,
    children,
}) => {
    const { menuHeight, dropdownRef, setMenuHeight } = useDropdown();

    useEffect(() => {
        setMenuHeight('auto');
    }, []);

    return (
        <DropdownContainer
            style={{ height: open ? menuHeight : 0 }}
            ref={dropdownRef}
            open={open}
            top={top}
            left={left}
            width={width}
            transform={transform}
            bg={bg}
        >
            <Transitions />
            {children}
        </DropdownContainer>
    );
};

Dropdown.propTypes = {
    children: PropTypes.node.isRequired,
    open: PropTypes.bool,
};
