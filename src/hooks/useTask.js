import { useContext, useCallback } from 'react';
import Context from '../context/TaskContext';

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
    } = useContext(Context);

    const openDeleteModal = useCallback(() => {
        deleteModalRef.current.openModal();
    });

    const openTaskPanel = useCallback(() => {
        panelRef.current.openModal();
    }, []);

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
    };
};
