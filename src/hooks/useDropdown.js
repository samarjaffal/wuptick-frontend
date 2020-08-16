import { useContext, useCallback } from 'react';
import Context from '../context/DropdownContext';
export const useDropdown = () => {
    const {
        open,
        setOpen,
        dropdownRef,
        menuHeight,
        setMenuHeight,
        activeMenu,
        setActiveMenu,
    } = useContext(Context);

    const calcHeight = useCallback((el) => {
        const height = el.offsetHeight;
        setMenuHeight(height);
    });

    return {
        open,
        setOpen,
        activeMenu,
        setActiveMenu,
        dropdownRef,
        menuHeight,
        setMenuHeight,
        calcHeight,
    };
};
