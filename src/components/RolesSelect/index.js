import React, { useState, useEffect } from 'react';
import { DropdownContextProvider } from '../../context/DropdownContext';
import { OutsideClick } from '../OutsideClick/index';
import { Label } from '../Label/index';
import { Colors } from '../../assets/css/colors';
import { OptionsDropDown } from './OptionsDropDown/index';
const setFirstLetterUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
