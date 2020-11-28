import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DropdownMenu } from '../../DropdownMenu/index';
import { DropdownItem } from '../../DropdownItem/index';
import { useDropdown } from '../../../hooks/useDropdown';
import { Colors } from '../../../assets/css/colors';

export const ChangeStatusDropDown = ({ setStatus, options }) => {
    const { setOpen } = useDropdown();
    return (
        <DropdownMenu menu="change-status" classMenu="menu-secondary">
            <DropdownItem
                goToMenu="main"
                onClicked={() => setOpen(true)}
                leftIcon={<FontAwesomeIcon icon="angle-left" />}
            >
                <span>Change Status</span>
            </DropdownItem>
            {options.map((option, index) => (
                <DropdownItem
                    key={index}
                    onClicked={() => {
                        setStatus(option);
                        setOpen(false);
                    }}
                >
                    <span style={{ color: Colors.gray }}>
                        {option.icon !== null && `${option.icon} `}
                        {option.status}
                    </span>
                </DropdownItem>
            ))}
        </DropdownMenu>
    );
};

ChangeStatusDropDown.propTypes = {
    options: PropTypes.array,
    setStatus: PropTypes.func,
};
