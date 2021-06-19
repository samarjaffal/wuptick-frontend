import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { Avatar } from '../../../Avatar/index';
import { MinimalButton } from '../../../MinimalButton/index';
import { useDropdown } from '../../../../hooks/useDropdown';
import { OutsideClick } from '../../../OutsideClick/index';
import { ListUsersDropDown } from '../../../AssignedUser/ListUsersDropDown/index';
import { Colors } from '../../../../assets/css/colors';
import { UserIconContainer, UserIconSVG } from './styles';

export const AssignedButton = ({ assigned }) => {
    const assignRef = useRef();
    const dropdownRef = useRef();
    const defaultText = '';
    const defaultAvatar = null;
    const [name, setName] = useState(defaultText);
    const [avatar, setAvatar] = useState(defaultAvatar);
    const [isActive, setIsActive] = useState(false);
    const [renderDropDown, setRenderDropdown] = useState(false);
    const { handleDropDown, handleDropDownOutsideClick } = useDropdown();

    const showAvatar = (avatar !== null || assigned !== null) && isActive;

    useEffect(() => {
        if (assigned) {
            setIsActive(assigned.status === 'active');
        }
        handleData();
    }, [assigned, isActive]);

    const setButtonData = (name, avatar) => {
        setName(name);
        setAvatar(avatar);
    }

    const handleData = useCallback(() => {
        const isAssigned = Boolean(assigned !== null && Object.keys(assigned).length > 0);

        if (!isAssigned || !isActive) {
            setButtonData(defaultText, defaultAvatar);
            return;
        }

        const name = `${assigned.name} ${assigned.last_name.charAt(0)}.`;
        const avatar = assigned.avatar;
        setButtonData(name, avatar);
    }, [isActive]);

    const initDropDown = () => {
        document.getElementById('dropwdown-app').innerHTML = '';
        setRenderDropdown(true);
    };

    const openDropdown = async () => {
        await initDropDown();
        handleDropDown(true, dropdownRef, assignRef);
    };

    const closeDropDown = () => {
        handleDropDownOutsideClick(false, dropdownRef);
        setRenderDropdown(false);
        console.log('close');
    };

    const handleOutsideClick = () => {
        closeDropDown();
    };

    return (
        <>
            <div
                className="AssignedButton"
                ref={assignRef}
                onClick={() => openDropdown()}
            >
                <MinimalButton
                    color={name == defaultText ? Colors.gray : Colors.blue}
                    hover={Colors.backgroud}
                    name={name}
                >
                    {(isParentHover) =>
                        showAvatar ? (
                            <Avatar size={22} src={avatar} user={assigned} />
                        ) : (
                            <UserIconContainer ishover={isParentHover ? 1 : 0}>
                                <UserIconSVG
                                    width="14px"
                                    height="14px"
                                    viewBox="0 0 22 22"
                                    ishover={isParentHover ? 1 : 0}
                                />
                            </UserIconContainer>
                        )
                    }
                </MinimalButton>
            </div>
            {renderDropDown &&
                ReactDom.createPortal(
                    <OutsideClick setLocalDropDownState={handleOutsideClick}>
                        <ListUsersDropDown
                            dropdownRef={dropdownRef}
                            closeDropDown={closeDropDown}
                        />
                    </OutsideClick>,
                    document.getElementById('dropwdown-app')
                )}
        </>
    );
};

AssignedButton.propTypes = {
    assigned: PropTypes.object,
};
