import React from 'react';
import ReactDom from 'react-dom';
import { ListUsersDropDown } from '../../../components/AssignedUser/ListUsersDropDown/index';
import { TaskItemDropDown as TaskItem } from '../../../components/Task/TaskItemDropDown/index';
import { OutsideClick } from '../../../components/OutsideClick/index';
import { useDropdown } from '../../../hooks/useDropdown';
import PropTypes from 'prop-types';

export const ListUsersDropdown = () => {
    const { openDropCallBack } = useDropdown();

    const handleDropDown = (value = null) => {
        value = value == null ? true : value;
        openDropCallBack(value);
    };

    return ReactDom.createPortal(
        <OutsideClick setLocalDropDownState={handleDropDown}>
            <ListUsersDropDown />
        </OutsideClick>,
        document.getElementById('dropwdown-app')
    );
};

export const TaskItemDropDown = () => {
    const { openDropCallBack } = useDropdown();

    const handleDropDown = (value = null) => {
        value = value == null ? true : value;
        openDropCallBack(value);
    };
    return ReactDom.createPortal(
        <OutsideClick setLocalDropDownState={handleDropDown}>
            <TaskItem />
        </OutsideClick>,
        document.getElementById('dropwdown-app')
    );
};

TaskItemDropDown.propTypes = {};
