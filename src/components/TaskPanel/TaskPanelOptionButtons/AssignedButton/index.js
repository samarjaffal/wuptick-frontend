import React, { useState, useEffect, useRef } from 'react';
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
    const [renderDropDown, setRenderDropdown] = useState(false);
    const { handleDropDown, handleDropDownOutsideClick } = useDropdown();

    useEffect(() => {
        handleData();
    }, [assigned]);

    const handleData = () => {
        if (assigned == null || Object.keys(assigned).length == 0) {
            setName(defaultText);
            setAvatar(defaultAvatar);
            return;
        }
        setName(`${assigned.name} ${assigned.last_name}`);
        setAvatar(assigned.avatar || null);
    };

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
                        avatar !== null ? (
                            <Avatar size={22} src={avatar} />
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
