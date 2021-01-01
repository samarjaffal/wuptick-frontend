import React, { createContext, useState, useRef } from 'react';
import PropTypes from 'prop-types';
const Context = createContext();

export const TaskContextProvider = ({ children }) => {
    const [elemType, setElemType] = useState('task');
    const [currentList, setCurrentList] = useState(null);
    const deleteModalRef = useRef();

    const value = {
        deleteModalRef,
        elemType,
        setElemType,
        currentList,
        setCurrentList,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;

TaskContextProvider.propTypes = {
    children: PropTypes.node,
};
