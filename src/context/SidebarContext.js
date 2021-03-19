import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
const Context = createContext();

export const SidebarContextProvider = ({ children }) => {
    const [isCollapsed, setCollapsed] = useState(false);

    const value = {
        isCollapsed,
        setCollapsed,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;

SidebarContextProvider.propTypes = {
    children: PropTypes.node,
};
