import { useContext, useCallback } from 'react';
import Context from '../context/DropdownContext';
import { isElementVisible } from '../shared/viewport';

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
        width,
        setWidth,
    } = useContext(Context);

    const calcHeight = useCallback((el) => {
        const height = el.offsetHeight;
        setMenuHeight(height);
    });

    const setRef = (ref) => {
        currentElemRef.current = ref.current;
    };

    const generateBoundings = (parentId, element) => {
        let position = {};

        //if element doesn't have parent
        if (!parentId) {
            const bodyRect = document.body.getBoundingClientRect();
            const offset = element.top - bodyRect.top;
            position = {
                top: offset,
                left: element.left,
                right: element.right,
                bottom: element.bottom,
            };
            //if element has a parent
        } else {
            const parentElem = document
                .getElementById(parentId)
                .getBoundingClientRect();
            const offset = element.top - parentElem.top;
            const left = element.left - parentElem.left;
            position = { top: offset, left: left };
        }
        return position;
    };

    const dropdownIsOutside = (position, width) => {
        //if no width return
        if (!width) return;
        //check if element is completely visible
        const isVisible = isElementVisible({ ...position, width });
        //if is not visible change ? change left position : keep default left position
        position.left = !isVisible ? window.innerWidth - width : position.left;
    };

    const setPositionDropDown = (
        elementRef,
        parentElId = null,
        width = null
    ) => {
        //get element bounding
        const element = elementRef.current.getBoundingClientRect();
        //get position of the element depending if it has a parent.
        const position = generateBoundings(parentElId, element);
        //check if dropdown is outside viewport
        dropdownIsOutside(position, width);
        //set dropdown position
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
            value
                ? dropdownRef.current.openDropdown()
                : dropdownRef.current.closeDropdown();
        },
        []
    );

    const handleDropDown = useCallback(
        (
            value = null,
            dropdownRef,
            triggerRef,
            parentElId = null,
            width = null
        ) => {
            if (value) {
                dropdownRef.current.openDropdown();
                setRef(triggerRef);
                if (width) setWidth(width);
                setPositionDropDown(triggerRef, parentElId, width);
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
        width,
        setWidth,
    };
};
