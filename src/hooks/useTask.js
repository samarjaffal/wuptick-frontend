import Context from '../context/TaskContext';
import { useContext, useCallback } from 'react';
import { useLocation, navigate } from '@reach/router';
import { useUser } from './useUser';

export const useTask = () => {
    const {
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
    } = useContext(Context);

    const path = useLocation();
    const location = path.pathname;

    const { setCurrentTask } = useUser();

    const openDeleteModal = useCallback(() => {
        deleteModalRef.current.openModal();
    }, []);

    const openTaskPanel = useCallback(() => {
        panelRef.current.openModal();
    }, []);

    const listHaveTask = useCallback((list, taskId) => {
        return list.tasks.some((task) => task._id == taskId);
    }, []);

    const getListId = useCallback((lists, taskId) => {
        const list = lists.find((list) => listHaveTask(list, taskId));
        return list._id;
    }, []);

    const getTaskFromLists = useCallback(
        (lists, taskId) => {
            if (lists.length == 0) return;
            const list = lists.find((list) => listHaveTask(list, taskId));
            if (typeof list == 'undefined') return null;
            const task = list.tasks.find((task) => task._id == taskId);
            return task;
        },
        [lists]
    );

    const handleOpenTaskPanel = useCallback((task, openFromReload = false) => {
        setCurrentTask(task);
        openTaskPanel();
        let taskURL = `${location}?task=${task._id}`;
        if (!openFromReload) {
            navigate(taskURL);
        }
    }, []);

    const openTaskPanelFromURL = useCallback((taskId, lists) => {
        if (taskId && !isPanelOpen) {
            let task = getTaskFromLists(lists, taskId);
            handleOpenTaskPanel(task, true);
        }
    }, []);

    const removeTaskFromURL = () => {
        const queryParams = new URLSearchParams(path.search);
        if (queryParams.has('task')) {
            navigate(location);
        }
    };

    const closePanel = () => {
        panelRef.current.closeModal();
        removeTaskFromURL();
    };

    return {
        openDeleteModal,
        deleteModalRef,
        elemType,
        setElemType,
        currentList,
        setCurrentList,
        openTaskPanel,
        panelRef,
        beforeDeleteTask,
        setBeforeDeleteTask,
        lists,
        setLists,
        getListId,
        getTaskFromLists,
        handleOpenTaskPanel,
        isPanelOpen,
        setIsPanelOpen,
        closePanel,
        openTaskPanelFromURL,
        removeTaskFromURL,
    };
};
