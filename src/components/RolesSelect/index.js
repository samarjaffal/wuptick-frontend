import React, { useState, useEffect } from 'react';
import { GetRolesQuery } from '../../requests/Role/GetRolesQuery';
import { Dropdown } from '../Dropdrown/index';
import { DropdownMenu } from '../DropdownMenu/index';
import { DropdownItem } from '../DropdownItem/index';
import { DropdownContextProvider } from '../../context/DropdownContext';
import { OutsideClick } from '../OutsideClick/index';
import { useDropdown } from '../../hooks/useDropdown';
import { Label } from '../Label/index';
import { Colors } from '../../assets/css/colors';

const setFirstLetterUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const OptionsDropDown = ({ openDrop, setOption }) => {
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

export const RolesSelect = ({ role, doUpdate, projectId, userId }) => {
    const [openDropDown, setOpenDropDown] = useState(false);
    const [currentOption, setCurrentOption] = useState({});

    const handleDropDown = (value = null) => {
        value = value == null ? !openDropDown : value;
        console.log(value, 'value');
        setOpenDropDown(value);
    };

    const setOption = (value) => {
        const roleTemp = { ...value };
        roleTemp.name = setFirstLetterUpperCase(roleTemp.name);
        setCurrentOption(roleTemp);
        doUpdate(projectId, userId, value._id.toLowerCase());
    };

    useEffect(() => {
        if (role) {
            const roleTemp = { ...role };
            if (Object.keys(role).length > 0) {
                roleTemp.name = setFirstLetterUpperCase(roleTemp.name);
                setCurrentOption(roleTemp);
            } else {
                setCurrentOption({ name: 'Member' });
            }
        }
    }, [role]);

    return (
        <DropdownContextProvider>
            <OutsideClick setLocalDropDownState={handleDropDown}>
                <Label
                    name={currentOption.name}
                    color={Colors.primary}
                    showCaret={true}
                    width="max-content"
                    onClicked={handleDropDown}
                    pointer={true}
                >
                    <OptionsDropDown
                        openDrop={openDropDown}
                        setOption={setOption}
                    />
                </Label>
            </OutsideClick>
        </DropdownContextProvider>
    );
};
