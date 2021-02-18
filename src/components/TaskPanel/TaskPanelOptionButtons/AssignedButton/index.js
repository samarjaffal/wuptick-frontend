import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { MinimalButton } from '../../../MinimalButton/index';
import { Avatar } from '../../../Avatar/index';
import { useDropdown } from '../../../../hooks/useDropdown';
import { Colors } from '../../../../assets/css/colors';
import { UserIconContainer, UserIconSVG } from './styles';

export const AssignedButton = ({ assigned }) => {
    const assignRef = useRef(null);
    const defaultText = 'Not assigned';
    const defaultAvatar = null;
    const [name, setName] = useState(defaultText);
    const [avatar, setAvatar] = useState(defaultAvatar);
    const {
        setRef,
        setPositionDropDown,
        openDropCallBack,
        setSelectedDropDownCB,
    } = useDropdown();

    useEffect(() => {
        console.log('assigned', assigned);
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
        if (assigned == null || Object.keys(assigned).length == 0) {
            setName(defaultText);
            setAvatar(defaultAvatar);
            return;
        }
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
                color={name == defaultText ? Colors.gray : Colors.blue}
                hover={Colors.backgroud}
                name={name}
            >
                {(isParentHover) =>
                    avatar !== null ? (
                        <Avatar size={22} src={avatar} />
                    ) : (
                        <UserIconContainer ishover={isParentHover}>
                            <UserIconSVG
                                width="14px"
                                height="14px"
                                viewBox="0 0 22 22"
                                ishover={isParentHover}
                            />
                        </UserIconContainer>
                    )
                }
            </MinimalButton>
        </div>
    );
};

AssignedButton.propTypes = {
    assigned: PropTypes.object,
};
