import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MinimalButton } from '../../../MinimalButton/index';
import { TaskListsDropdown } from '../../TaskPanelHeader/Dropdowns/TaskListsDropdown/index';
import { useDropdown } from '../../../../hooks/useDropdown';
import { OutsideClick } from '../../../OutsideClick/index';
import { Colors } from '../../../../assets/css/colors';

export const ChangeListButton = ({ lists: _lists, task }) => {
    const [lists, setLists] = useState([]);
    const [currentList, setCurrentList] = useState({});
    const [renderDropDown, setRenderDropdown] = useState(false);
    const { handleDropDown, handleDropDownOutsideClick } = useDropdown();
    const eleRef = useRef();
    const dropdownRef = useRef();

    const getCurrentList = () => {
        let currentList = _lists.find((list) =>
            list.tasks.some((_task) => _task._id == task._id)
        );
        setCurrentList(currentList);
    };

    useEffect(() => {
        setLists(_lists);
        getCurrentList();
    }, [_lists]);

    const initDropDown = () => {
        document.getElementById('dropwdown-app').innerHTML = '';
        setRenderDropdown(true);
    };

    const openDropdown = async () => {
        await initDropDown();
        handleDropDown(true, dropdownRef, eleRef);
    };

    const closeDropDown = () => {
        handleDropDownOutsideClick(false, dropdownRef);
        setRenderDropdown(false);
    };

    const handleOutsideClick = () => {
        closeDropDown();
    };

    return (
        <>
            <div
                className="ChangeListButton"
                onClick={() => openDropdown()}
                ref={eleRef}
            >
                <MinimalButton color={Colors.primary} name={currentList.name}>
                    {() => (
                        <FontAwesomeIcon icon="tasks" color={Colors.primary} />
                    )}
                </MinimalButton>
            </div>
            {renderDropDown &&
                ReactDom.createPortal(
                    <OutsideClick setLocalDropDownState={handleOutsideClick}>
                        <TaskListsDropdown
                            lists={lists || []}
                            currentList={currentList}
                            task={task || {}}
                            dropdownRef={dropdownRef}
                            closeDropDown={closeDropDown}
                        />
                    </OutsideClick>,
                    document.getElementById('dropwdown-app')
                )}
        </>
    );
};

ChangeListButton.propTypes = {
    lists: PropTypes.array,
    task: PropTypes.object,
};
