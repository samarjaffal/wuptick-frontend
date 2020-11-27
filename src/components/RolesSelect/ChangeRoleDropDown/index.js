import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetRolesQuery } from '../../../requests/Role/GetRolesQuery';
import { DropdownMenu } from '../../DropdownMenu/index';
import { DropdownItem } from '../../DropdownItem/index';
import { useDropdown } from '../../../hooks/useDropdown';
import { setFirstLetterUpperCase } from '../../../shared/functions';
import { Colors } from '../../../assets/css/colors';

export const ChangeRoleDropDown = ({ setOption }) => {
    const { setOpen } = useDropdown();
    return (
        <GetRolesQuery>
            {({ data }) => {
                const { getRoles: options } = data;
                return (
                    <DropdownMenu menu="change-role" classMenu="menu-secondary">
                        <DropdownItem
                            goToMenu="main"
                            onClicked={() => setOpen(true)}
                            leftIcon={<FontAwesomeIcon icon="angle-left" />}
                        >
                            <span>Change Role</span>
                        </DropdownItem>
                        {options.map((option) => (
                            <DropdownItem
                                key={option._id}
                                onClicked={() => {
                                    setOption(option);
                                    setOpen(false);
                                }}
                            >
                                <span style={{ color: Colors.gray }}>
                                    {setFirstLetterUpperCase(option.name)}
                                </span>
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                );
            }}
        </GetRolesQuery>
    );
};

ChangeRoleDropDown.propTypes = {
    setOption: PropTypes.func,
};
