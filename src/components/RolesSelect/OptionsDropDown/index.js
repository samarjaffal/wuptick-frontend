import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { GetRolesQuery } from '../../../requests/Role/GetRolesQuery';
import { Dropdown } from '../../Dropdrown/index';
import { DropdownMenu } from '../../DropdownMenu/index';
import { DropdownItem } from '../../DropdownItem/index';
import { useDropdown } from '../../../hooks/useDropdown';
import { Colors } from '../../../assets/css/colors';

const setFirstLetterUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const OptionsDropDown = ({ openDrop, setOption, position }) => {
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
                        top={`${Math.round(position.top + 30)}px`}
                        left={`${position.left}px`}
                        bg={Colors.whitePrimary}
                    >
                        <DropdownMenu menu="main" classMenu="menu-primary">
                            {options.map((option) => (
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

OptionsDropDown.propTypes = {
    openDrop: PropTypes.func,
    setOption: PropTypes.func,
    position: PropTypes.object,
};
