import React, { useState, useEffect } from 'react';
import { Colors } from '../../assets/css/colors';
import { Dropdown } from '../Dropdrown/index';
import { DropdownMenu } from '../DropdownMenu/index';
import { DropdownItem } from '../DropdownItem/index';
import { DropdownContextProvider } from '../../context/DropdownContext';
import { OutsideClick } from '../OutsideClick/index';
import { useDropdown } from '../../hooks/useDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Status as StatusStyled } from './styles';
import PropTypes from 'prop-types';

const OPTIONS = [
    {
        status: '☀️ Active',
        color: '#2AE581',
    },
    {
        status: '🌙 Inactive',
        color: '#FB7B7F',
    },
    {
        status: '🌤️ On Hold',
        color: '#FFC53A',
    },
];

const OptionsDropDown = ({ openDrop }) => {
    const { open, setOpen } = useDropdown();

    useEffect(() => {
        setOpen(openDrop);
    }, [openDrop]);

    return (
        <Dropdown
            open={open}
            transform="-58%"
            width="200px"
            top="46px"
            bg={Colors.whitePrimary}
        >
            <DropdownMenu menu="main" classMenu="menu-primary">
                {OPTIONS.map((option, index) => (
                    <DropdownItem
                        key={index}
                        onClicked={() => console.log('clicked 1')}
                    >
                        {option.status}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};

export const Status = () => {
    const [options, setOptions] = useState(OPTIONS);
    const [currentOption, setCurrentOption] = useState(options[0].status);
    const [currentColor, setCurrentColor] = useState(options[0].color);
    const [openDropDown, setOpenDropDown] = useState(false);

    const handleDropDown = (value) => {
        setOpenDropDown(value);
    };

    return (
        <>
            <DropdownContextProvider>
                <OutsideClick setLocalDropDownState={handleDropDown}>
                    <StatusStyled
                        color={currentColor}
                        onClick={() => setOpenDropDown(!openDropDown)}
                    >
                        <span>{currentOption}</span>{' '}
                        <FontAwesomeIcon
                            icon="caret-down"
                            color={currentColor}
                        />
                        <OptionsDropDown openDrop={openDropDown} />
                    </StatusStyled>
                </OutsideClick>
            </DropdownContextProvider>
        </>
    );
};

Status.propTypes = {
    children: PropTypes.any,
};

OptionsDropDown.propTypes = {
    openDrop: PropTypes.bool,
};
