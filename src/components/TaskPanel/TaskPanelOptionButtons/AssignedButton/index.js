import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { MinimalButton } from '../../../MinimalButton/index';
import { Avatar } from '../../../Avatar/index';
import { useDropdown } from '../../../../hooks/useDropdown';
import { Colors } from '../../../../assets/css/colors';

export const AssignedButton = ({ assigned }) => {
    const assignRef = useRef(null);
    const [name, setName] = useState('Not assigned');
    const [avatar, setAvatar] = useState(null);
    const {
        setRef,
        setPositionDropDown,
        openDropCallBack,
        setSelectedDropDownCB,
    } = useDropdown();

    useEffect(() => {
        console.log('assigned');
        handleData();
    }, [assigned]);

    const handleDropDown = (value = null) => {
        value = value == null ? true : value;
        setSelectedDropDownCB('list-users');
        openDropCallBack(value);
        if (value) {
            setRef(assignRef);
            setPositionDropDown(assignRef);
        }
    };

    const handleData = () => {
        if (assigned == null || Object.keys(assigned).length == 0) return;
        setName(`${assigned.name} ${assigned.last_name}`);
        setAvatar(assigned.avatar || null);
    };

    return (
        <div
            className="AssignedButton"
            ref={assignRef}
            onClick={() => handleDropDown()}
        >
            <MinimalButton
                color={Colors.blue}
                hover={Colors.backgroud}
                name={name}
            >
                {() => <Avatar size={22} src={avatar} />}
            </MinimalButton>
        </div>
    );
};

AssignedButton.propTypes = {
    assigned: PropTypes.object,
};
