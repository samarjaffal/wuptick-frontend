import React from 'react';
import ReactDom from 'react-dom';
import { ListUsersDropDown } from '../../../components/AssignedUser/ListUsersDropDown/index';
import { OutsideClick } from '../../../components/OutsideClick/index';
import { useDropdown } from '../../../hooks/useDropdown';
import PropTypes from 'prop-types';

export const ListUsersDropdown = ({ taskId }) => {
    const { openDropCallBack } = useDropdown();

    const handleDropDown = (value = null) => {
        value = value == null ? true : value;
        openDropCallBack(value);
    };

    return ReactDom.createPortal(
        <OutsideClick setLocalDropDownState={handleDropDown}>
            <ListUsersDropDown taskId={taskId} />
        </OutsideClick>,
        document.getElementById('dropwdown-app')
    );
};

ListUsersDropdown.propTypes = {};
