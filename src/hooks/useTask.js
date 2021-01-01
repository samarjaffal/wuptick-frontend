import { useContext, useCallback } from 'react';
import Context from '../context/TaskContext';

export const useTask = () => {
    const {
        deleteModalRef,
        elemType,
        setElemType,
        currentList,
        setCurrentList,
    } = useContext(Context);

    const openDeleteModal = useCallback(() => {
        deleteModalRef.current.openModal();
    });

    return {
        openDeleteModal,
        deleteModalRef,
        elemType,
        setElemType,
        currentList,
        setCurrentList,
    };
};
