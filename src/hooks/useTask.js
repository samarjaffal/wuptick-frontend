import Context from '../context/TaskContext';
import { useContext, useCallback } from 'react';
import { navigate } from '@reach/router';
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

    const { setCurrentTask } = useUser();

    const openDeleteModal = useCallback(() => {
        deleteModalRef.current.openModal();
    }, []);

    const openTaskPanel = useCallback(() => {
        panelRef.current.openModal();
    }, []);

    const handleOpenTaskPanel = useCallback(
        (url, task, openFromReload = false) => {
            setCurrentTask(task);
            openTaskPanel();
            let taskURL = `${url}?task=${task._id}`;
            if (!openFromReload) {
                navigate(taskURL);
            }
        },
        []
    );

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
            const task = list.tasks.find((task) => task._id == taskId);
            return task;
        },
        [lists]
    );

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
    };
};
