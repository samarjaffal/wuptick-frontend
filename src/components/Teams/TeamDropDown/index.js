import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from '../../Dropdrown/index';
import { DropdownMenu } from '../../DropdownMenu/index';
import { DropdownItem } from '../../DropdownItem/index';
import { useDropdown } from '../../../hooks/useDropdown';

export const TeamDropDown = ({ openDrop }) => {
    const { open, setOpen } = useDropdown();

    useEffect(() => {
        setOpen(openDrop);
    }, [openDrop]);

    return (
        <Dropdown open={open} transform="-91%" width="200px" top="30px">
            <DropdownMenu menu="main" classMenu="menu-primary">
                <DropdownItem
                    leftIcon={<FontAwesomeIcon icon="edit" />}
                    onClicked={() => console.log('clicked 1')}
                >
                    Edit
                </DropdownItem>
                <DropdownItem
                    leftIcon={<FontAwesomeIcon icon="sign-out-alt" />}
                    onClicked={() => console.log('clicked 2')}
                >
                    Leave Team
                </DropdownItem>
                <DropdownItem
                    leftIcon={<FontAwesomeIcon icon="trash-alt" />}
                    onClicked={() => console.log('clicked 3')}
                >
                    Delete
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

TeamDropDown.propTypes = {
    openDrop: PropTypes.bool,
};
