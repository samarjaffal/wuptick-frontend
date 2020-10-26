import React, { useState, useEffect } from 'react';
import { Colors } from '../../assets/css/colors';
import { Label } from '../Label/index';
import { Dropdown } from '../Dropdrown/index';
import { DropdownMenu } from '../DropdownMenu/index';
import { DropdownItem } from '../DropdownItem/index';
import { DropdownContextProvider } from '../../context/DropdownContext';
import { OutsideClick } from '../OutsideClick/index';
import { useDropdown } from '../../hooks/useDropdown';
import PropTypes from 'prop-types';

const OPTIONS = [
    {
        status: 'Active',
        value: 'active',
        icon: '☀️',
        color: Colors.blue,
    },
    {
        status: 'Inactive',
        value: 'inactive',
        icon: '🌙',
        color: Colors.black,
    },
    {
        status: 'On Hold',
        value: 'on_hold',
        icon: '🌤️',
        color: Colors.orange,
    },
];

const OptionsDropDown = ({ openDrop, setStatus }) => {
    const { open, setOpen } = useDropdown();

    useEffect(() => {
        setOpen(openDrop);
    }, [openDrop]);

    return (
        <Dropdown open={open} width="200px" top="46px" bg={Colors.whitePrimary}>
            <DropdownMenu menu="main" classMenu="menu-primary">
                {OPTIONS.map((option, index) => (
                    <DropdownItem
                        key={index}
                        onClicked={() => setStatus(option)}
                    >
                        {option.icon !== null && `${option.icon} `}{' '}
                        {option.status}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};

export const Status = ({ status, doUpdate, elemId }) => {
    const [options] = useState(OPTIONS);
    const [currentOption, setCurrentOption] = useState(options[0].status);
    const [currentColor, setCurrentColor] = useState(options[0].color);
    const [currentIcon, setcurrentIcon] = useState(options[0].icon);
    const [openDropDown, setOpenDropDown] = useState(false);

    useEffect(() => {
        const option = options.find(
            (option) => option.value.toLowerCase() == status.toLowerCase()
        );
        if (typeof option !== undefined && status !== null) {
            setCurrentOption(option.status);
            setCurrentColor(option.color);
            setcurrentIcon(option.icon);
        }
    }, [status]);

    const handleDropDown = (value = null) => {
        value = value == null ? !openDropDown : value;
        setOpenDropDown(value);
    };

    const setStatus = (status) => {
        setCurrentOption(status.status);
        setCurrentColor(status.color);
        setcurrentIcon(status.icon);

        const data = {
            moduleId: elemId,
            input: { status: status.value.toLowerCase() },
        };
        doUpdate(data);
    };

    return (
        <>
            <DropdownContextProvider>
                <OutsideClick setLocalDropDownState={handleDropDown}>
                    <Label
                        color={currentColor}
                        icon={currentIcon}
                        name={currentOption}
                        showCaret={true}
                        onClicked={handleDropDown}
                        width="81px"
                        pointer={true}
                    >
                        <OptionsDropDown
                            openDrop={openDropDown}
                            setStatus={setStatus}
                        />
                    </Label>
                </OutsideClick>
            </DropdownContextProvider>
        </>
    );
};

Status.propTypes = {
    children: PropTypes.any,
    status: PropTypes.string,
    doUpdate: PropTypes.func,
    elemId: PropTypes.string,
};

OptionsDropDown.propTypes = {
    openDrop: PropTypes.bool,
    setStatus: PropTypes.func,
};
