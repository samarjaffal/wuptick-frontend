import React, { useEffect } from 'react';

import { GetRolesQuery } from '../../../requests/Role/GetRolesQuery';
import { Dropdown } from '../../Dropdrown/index';
import { DropdownMenu } from '../../DropdownMenu/index';
import { DropdownItem } from '../../DropdownItem/index';
import { useDropdown } from '../../../hooks/useDropdown';
import { Colors } from '../../../assets/css/colors';

const setFirstLetterUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const OptionsDropDown = ({ openDrop, setOption }) => {
    const { open, setOpen } = useDropdown();

    useEffect(() => {
        setOpen(openDrop);
    }, [openDrop]);

    return (
        <GetRolesQuery>
            {({ data }) => {
                const { getRoles: options } = data;

                return (
                    <Dropdown
                        open={open}
                        transform="-66%"
                        width="200px"
                        top="46px"
                        bg={Colors.whitePrimary}
                    >
                        <DropdownMenu menu="main" classMenu="menu-primary">
                            {options.map((option, index) => (
                                <DropdownItem
                                    key={option._id}
                                    onClicked={() => setOption(option)}
                                >
                                    {setFirstLetterUpperCase(option.name)}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                );
            }}
        </GetRolesQuery>
    );
};
