import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from '../../Dropdrown/index';
import { DropdownMenu } from '../../DropdownMenu/index';
import { DropdownItem } from '../../DropdownItem/index';
import { useDropdown } from '../../../hooks/useDropdown';
import { useTask } from '../../../hooks/useTask';

export const TaskItemDropDown = () => {
    const { open, position } = useDropdown();
    const { openDeleteModal } = useTask();

    return (
        <Dropdown
            open={open}
            transform="-91%"
            width="200px"
            top={`${Math.round(position.top + 30)}px`}
            left={`${position.left}px`}
        >
            <DropdownMenu menu="main" classMenu="menu-primary">
                <DropdownItem
                    leftIcon={<FontAwesomeIcon icon="trash-alt" />}
                    onClicked={() => openDeleteModal()}
                >
                    Delete
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

TaskItemDropDown.propTypes = {};
