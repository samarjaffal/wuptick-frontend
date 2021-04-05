import React, { useRef, useState } from 'react';
import ReactDom from 'react-dom';
import { OptionsButton } from '../../OptionsButton/index';
import { useDropdown } from '../../../hooks/useDropdown';
import { useTask } from '../../../hooks/useTask';
import { TaskListDropDown } from '../TaskListDropDown/index';
import { OutsideClick } from '../../OutsideClick/index';
import PropTypes from 'prop-types';

export const OptionsButtonList = ({ list, dropdownRef, index, editList }) => {
    const [renderDropDown, setRenderDropdown] = useState(false);
    const { handleDropDown, handleDropDownOutsideClick } = useDropdown();
    const { setCurrentList, openDeleteModal, setElemType } = useTask();

    let optionsRef = useRef();

    const initDropDown = () => {
        document.getElementById('dropwdown-app').innerHTML = '';
        setRenderDropdown(true);
    };

    const openDropdown = async () => {
        await initDropDown();
        handleDropDown(true, dropdownRef, optionsRef);
        setCurrentList(list);
        setElemType('list');
    };

    const closeDropDown = () => {
        handleDropDownOutsideClick(false, dropdownRef);
        setRenderDropdown(false);
    };

    const handleOutsideClick = () => {
        closeDropDown();
    };

    const deleteList = () => {
        if (open) closeDropDown();
        openDeleteModal();
    };

    return (
        <>
            <OptionsButton doFunc={openDropdown} elemRef={optionsRef} />
            {renderDropDown &&
                ReactDom.createPortal(
                    <OutsideClick setLocalDropDownState={handleOutsideClick}>
                        <TaskListDropDown
                            dropdownRef={dropdownRef}
                            closeDropDown={closeDropDown}
                            index={index}
                            deleteList={deleteList}
                            editList={editList}
                        />
                    </OutsideClick>,
                    document.getElementById('dropwdown-app')
                )}
        </>
    );
};

OptionsButtonList.propTypes = {
    list: PropTypes.object,
    dropdownRef: PropTypes.any,
    index: PropTypes.number,
};
