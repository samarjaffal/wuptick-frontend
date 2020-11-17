import React, { useState, useEffect, useRef, useImperativeHandle } from 'react';
import { Colors } from '../../assets/css/colors';
import { Label } from '../Label/index';
import { Dropdown } from '../Dropdrown/index';
import { DropdownMenu } from '../DropdownMenu/index';
import { DropdownItem } from '../DropdownItem/index';
import { OutsideClick } from '../OutsideClick/index';
import { useUser } from '../../hooks/useUser';
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

export const OptionsDropDown = ({ setStatus, moduleId, doDeleteModule }) => {
    const { open, position } = useDropdown();
    const { currentProject } = useUser();
    return (
        <Dropdown
            open={open}
            width="200px"
            transform="-66%"
            bg={Colors.whitePrimary}
            top={`${Math.round(position.top + 30)}px`}
            left={`${position.left}px`}
        >
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
                <DropdownItem
                    onClicked={() =>
                        doDeleteModule(moduleId, currentProject._id)
                    }
                >
                    <span style={{ color: Colors.red }}>Delete</span>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export const Status = ({ status, doUpdate, elemId, setModuleCallback }) => {
    const [options] = useState(OPTIONS);
    const [currentOption, setCurrentOption] = useState(options[0].status);
    const [currentColor, setCurrentColor] = useState(options[0].color);
    const [currentIcon, setcurrentIcon] = useState(options[0].icon);
    const [openDropDown, setOpenDropDown] = useState(false);
    const { setRef, setPositionDropDown, openDropCallBack } = useDropdown();
    const selectRef = useRef(null);
    const labelRef = useRef(null);

    useImperativeHandle(selectRef, () => {
        return {
            setStatus: (value) => setStatus(value),
        };
    });

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
        value = value == null ? true : value;
        setOpenDropDown(value);
        openDropCallBack(value);
        if (value) {
            setRef(selectRef);
            setPositionDropDown(labelRef.current.getBoundingClientRect());
            setModuleCallback(elemId);
        }
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
        <div ref={selectRef}>
            <OutsideClick setLocalDropDownState={handleDropDown}>
                <Label
                    color={currentColor}
                    icon={currentIcon}
                    name={currentOption}
                    showCaret={true}
                    onClicked={handleDropDown}
                    width="81px"
                    pointer={true}
                    ref={labelRef}
                ></Label>
            </OutsideClick>
        </div>
    );
};

Status.propTypes = {
    children: PropTypes.any,
    status: PropTypes.string,
    doUpdate: PropTypes.func,
    elemId: PropTypes.string,
    setModuleCallback: PropTypes.func,
};

OptionsDropDown.propTypes = {
    openDrop: PropTypes.bool,
    setStatus: PropTypes.func,
};
