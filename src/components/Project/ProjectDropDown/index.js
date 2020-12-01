import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from '../../Dropdrown/index';
import { DropdownMenu } from '../../DropdownMenu/index';
import { DropdownItem } from '../../DropdownItem/index';
import { useDropdown } from '../../../hooks/useDropdown';

export const ProjectDropDown = ({
    teamId,
    openDeleteModal,
    openAddProjectModal,
}) => {
    const { open, position } = useDropdown();

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
                    leftIcon={<FontAwesomeIcon icon="edit" />}
                    onClicked={() => openAddProjectModal(teamId, 'update')}
                >
                    Edit
                </DropdownItem>
                <DropdownItem
                    leftIcon={<FontAwesomeIcon icon="sign-out-alt" />}
                    onClicked={() => openDeleteModal('leave')}
                >
                    Leave Project
                </DropdownItem>

                <DropdownItem
                    leftIcon={<FontAwesomeIcon icon="trash-alt" />}
                    onClicked={() => openDeleteModal('delete')}
                >
                    Delete
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

ProjectDropDown.propTypes = {
    openDrop: PropTypes.bool,
    projectId: PropTypes.string,
    openDeleteModal: PropTypes.func,
    teamId: PropTypes.string,
    openAddProjectModal: PropTypes.func,
};
