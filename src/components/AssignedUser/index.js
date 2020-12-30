import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '../Avatar/index';
import { useDropdown } from '../../hooks/useDropdown';
import { UserIconContainer, UserIconSVG } from './styles';
import { useUser } from '../../hooks/useUser';

export const AssignedUser = ({ task }) => {
    const {
        setRef,
        setPositionDropDown,
        openDropCallBack,
        setSelectedDropDownCB,
    } = useDropdown();
    const { setCurrentTask } = useUser();
    const assignRef = useRef(null);

    const handleDropDown = (value = null) => {
        value = value == null ? true : value;
        setSelectedDropDownCB('list-users');
        openDropCallBack(value);
        if (value) {
            setRef(assignRef);
            setPositionDropDown(assignRef);
            setCurrentTask(task);
        }
    };

    return (
        <UserIconContainer ref={assignRef} onClick={() => handleDropDown()}>
            {task.assigned !== null && Object.keys(task.assigned).length > 0 ? (
                <Avatar hide={false} size={25} src={task.assigned.avatar} />
            ) : (
                <UserIconSVG width="14px" height="14px" viewBox="0 0 25 25" />
            )}
        </UserIconContainer>
    );
};

AssignedUser.propTypes = {
    task: PropTypes.object,
};
