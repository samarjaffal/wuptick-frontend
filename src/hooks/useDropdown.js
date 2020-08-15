import { useContext, useEffect, useCallback } from 'react';
import Context from '../context/DropdownContext';

export const useDropdown = () => {
    const {
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
        activeMenu,
        setActiveMenu,
        dropdownRef,
        menuHeight,
        setMenuHeight,
        calcHeight,
    };
};
