import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../../Dropdrown/index';
import { DropdownMenu } from '../../DropdownMenu/index';
import { DropdownItem } from '../../DropdownItem/index';
import { useDropdown } from '../../../hooks/useDropdown';

export const ReplyDropDown = ({
    dropdownRef,
    setOpenEditor,
    index,
    closeDropDown,
}) => {
    const { open, position } = useDropdown();

    return (
        <Dropdown
            ref={dropdownRef}
            open={open}
            transform="-91%"
            width="200px"
            top={`${Math.round(position.top + 30)}px`}
            left={`${position.left}px`}
        >
            <DropdownMenu menu="main" classMenu="menu-primary">
                <DropdownItem
                    onClicked={() => {
                        setOpenEditor(index, true), closeDropDown();
                    }}
                >
                    Edit Comment
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

ReplyDropDown.propTypes = {
    dropdownRef: PropTypes.any,
    setOpenEditor: PropTypes.func,
    index: PropTypes.number,
    closeDropDown: PropTypes.func,
};
