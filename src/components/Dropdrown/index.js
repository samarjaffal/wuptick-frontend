import React, { useEffect, forwardRef, useImperativeHandle } from 'react';
import { Dropdown as DropdownContainer } from './styles';
import { Transitions } from './Transitions.js';
import { useDropdown } from '../../hooks/useDropdown';
import PropTypes from 'prop-types';

export const Dropdown = forwardRef(
    ({ open, top, left, width, transform, bg, children }, ref) => {
        const {
            menuHeight,
            dropdownRef,
            setMenuHeight,
            setOpen,
        } = useDropdown();

        useEffect(() => {
            setMenuHeight('auto');
        }, []);

        useImperativeHandle(ref, () => {
            return {
                openDropdown: () => openDrop(),
                closeDropdown: () => closeDrop(),
            };
        });

        const openDrop = () => {
            setOpen(true);
        };

        const closeDrop = () => {
            setOpen(false);
        };

        return (
            <DropdownContainer
                style={{ height: open ? menuHeight : menuHeight }}
                ref={dropdownRef}
                open={open}
                top={top}
                left={open ? left : '-100px'}
                width={width}
                transform={transform}
                bg={bg}
            >
                <Transitions />
                {children}
            </DropdownContainer>
        );
    }
);

Dropdown.displayName = 'Dropdown';
Dropdown.propTypes = {
    children: PropTypes.node.isRequired,
    open: PropTypes.bool,
};
