import React, { createContext, useState, useRef } from 'react';
import PropTypes from 'prop-types';
const Context = createContext();

export const TaskContextProvider = ({ children }) => {
    const [elemType, setElemType] = useState('task');
    const [currentList, setCurrentList] = useState(null);
    const [lists, setLists] = useState([]);
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [beforeDeleteTask, setBeforeDeleteTask] = useState(null);
    const deleteModalRef = useRef();
    const panelRef = useRef(null);

    const value = {
        deleteModalRef,
        elemType,
        setElemType,
        currentList,
        setCurrentList,
        panelRef,
        beforeDeleteTask,
        setBeforeDeleteTask,
        lists,
        setLists,
        isPanelOpen,
        setIsPanelOpen,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;

TaskContextProvider.propTypes = {
    children: PropTypes.node,
};
