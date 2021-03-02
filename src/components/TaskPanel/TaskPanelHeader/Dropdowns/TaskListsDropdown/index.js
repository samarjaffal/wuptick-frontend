import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../../../../Dropdrown/index';
import { useDropdown } from '../../../../../hooks/useDropdown';
import { Colors } from '../../../../../assets/css/colors';

export const TaskListsDropdown = ({ dropdownRef, closeDropDown = null }) => {
    const { open, position } = useDropdown();
    return (
        <Dropdown
            open={open}
            width="200px"
            transform="0"
            ref={dropdownRef}
            bg={Colors.whitePrimary}
            top={`${Math.round(position.top + 30)}px`}
            left={`${position.left}px`}
        >
            Hola
        </Dropdown>
    );
};

TaskListsDropdown.propTypes = {
    dropdownRef: PropTypes.any,
    closeDropDown: PropTypes.func,
};
