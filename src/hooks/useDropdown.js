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

    const setPositionDropDown = (elementRef, parentElId = null) => {
        const elemRect = elementRef.current.getBoundingClientRect();
        if (!parentElId) {
            const bodyRect = document.body.getBoundingClientRect();
            const offset = elemRect.top - bodyRect.top;
            const position = { top: offset, left: elemRect.left };
            setPosition(position);
        } else {
            const parentPos = document
                .getElementById(parentElId)
                .getBoundingClientRect();
            const offset = elemRect.top - parentPos.top;
            const left = elemRect.left - parentPos.left;
            const position = { top: offset, left: left };
            setPosition(position);
        }
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
            value
                ? dropdownRef.current.openDropdown()
                : dropdownRef.current.closeDropdown();
        },
        []
    );

    const handleDropDown = useCallback(
        (value = null, dropdownRef, triggerRef, parentElId = null) => {
            if (value) {
                dropdownRef.current.openDropdown();
                setRef(triggerRef);
                setPositionDropDown(triggerRef, parentElId);
            } else {
                dropdownRef.current.closeDropdown();
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
