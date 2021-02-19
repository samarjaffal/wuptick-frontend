import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdrown/index';
import { useDropdown } from '../../hooks/useDropdown';

export const TagsDropdown = ({ dropdownRef, closeDropDown }) => {
    const { open, position } = useDropdown();

    return (
        <Dropdown
            ref={dropdownRef}
            open={open}
            transform="0"
            width="200px"
            top={`${Math.round(position.top + 30)}px`}
            left={`${position.left}px`}
        >
            <div>hola</div>
        </Dropdown>
    );
};

TagsDropdown.propTypes = {};
