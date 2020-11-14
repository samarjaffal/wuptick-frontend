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
        currentElemRef,
        setPosition,
        position,
    } = useContext(Context);

    const calcHeight = useCallback((el) => {
        const height = el.offsetHeight;
        setMenuHeight(height);
    });

    const setRef = (ref) => {
        currentElemRef.current = ref.current;
    };

    const setPositionDropDown = (position) => {
        setPosition(position);
    };

    const openDropCallBack = (value) => {
        setOpen(value);
    };

    return {
        open,
        setOpen,
        activeMenu,
        setActiveMenu,
        dropdownRef,
        menuHeight,
        setMenuHeight,
        calcHeight,
        currentElemRef,
        setRef,
        position,
        setPositionDropDown,
        openDropCallBack,
    };
};
