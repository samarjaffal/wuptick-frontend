import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDropdown } from '../../hooks/useDropdown';
import { UserIconContainer, UserIconSVG } from './styles';
import { useUser } from '../../hooks/useUser';

export const AssignedUser = ({ task }) => {
    const { setRef, setPositionDropDown, openDropCallBack } = useDropdown();
    const { setCurrentTask } = useUser();
    const assignRef = useRef(null);

    const handleDropDown = (value = null) => {
        value = value == null ? true : value;
        openDropCallBack(value);
        if (value) {
            setRef(assignRef);
            setPositionDropDown(assignRef.current.getBoundingClientRect());
            setCurrentTask(task);
        }
    };

    return (
        <UserIconContainer ref={assignRef} onClick={() => handleDropDown()}>
            <UserIconSVG width="14px" height="14px" viewBox="0 0 25 25" />
        </UserIconContainer>
    );
};

AssignedUser.propTypes = {};
