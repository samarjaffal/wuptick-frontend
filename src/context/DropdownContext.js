import React, { createContext, useState, useRef } from 'react';
import PropTypes from 'prop-types';
const Context = createContext();

export const DropdownContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    const value = {
        activeMenu,
        setActiveMenu,
        setMenuHeight,
        menuHeight,
        dropdownRef,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;

DropdownContextProvider.propTypes = {
    children: PropTypes.node,
};
