import React, { createContext, useState, useRef } from 'react';
import PropTypes from 'prop-types';
const Context = createContext();

export const DropdownContextProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const [selectDropDown, setSelectDropDown] = useState(null);
    const [position, setPosition] = useState({});
    const [width, setWidth] = useState(0);

    const dropdownRef = useRef(null);
    const currentElemRef = useRef(null);

    const value = {
        open,
        setOpen,
        activeMenu,
        setActiveMenu,
        setMenuHeight,
        menuHeight,
        dropdownRef,
        currentElemRef,
        position,
        setPosition,
        selectDropDown,
        setSelectDropDown,
        width,
        setWidth,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;

DropdownContextProvider.propTypes = {
    children: PropTypes.node,
};
