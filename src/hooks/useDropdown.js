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
        selectDropDown,
        setSelectDropDown,
    } = useContext(Context);

    const calcHeight = useCallback((el) => {
        const height = el.offsetHeight;
        setMenuHeight(height);
    });

    const setRef = (ref) => {
        currentElemRef.current = ref.current;
    };

    const setPositionDropDown = (elementRef) => {
        const bodyRect = document.body.getBoundingClientRect();
        const elemRect = elementRef.current.getBoundingClientRect();
        const offset = elemRect.top - bodyRect.top;
        const position = { top: offset, left: elemRect.left };
        setPosition(position);
    };

    const openDropCallBack = (value) => {
        setOpen(value);
        if (value == false) {
            setActiveMenu('main');
        }
    };

    const setSelectedDropDownCB = (value) => {
        setSelectDropDown(value);
    };

    const handleDropDownOutsideClick = useCallback(
        (value = null, dropdownRef) => {
            let open = value == null ? true : value;
            open
                ? dropdownRef.current.openDropdown()
                : dropdownRef.current.closeDropdown();
        },
        []
    );

    const handleDropDown = useCallback(
        (value = null, dropdownRef, triggerRef) => {
            let open = value == null ? true : value;
            open
                ? dropdownRef.current.openDropdown()
                : dropdownRef.current.closeDropdown();
            if (open) {
                dropdownRef.current.openDropdown();
                setRef(triggerRef);
                setPositionDropDown(triggerRef);
            }
        },
        []
    );

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
        selectDropDown,
        setSelectedDropDownCB,
        handleDropDownOutsideClick,
        handleDropDown,
    };
};
