import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '../../Avatar/index';
import { Dropdown } from '../../Dropdrown/index';
import { DropdownMenu } from '../../DropdownMenu/index';
import { DropdownItem } from '../../DropdownItem/index';
import { Logout } from '../../Logout/index';
import { Me } from '../../Me/index';
import { OutsideClick } from '../../OutsideClick/index';
import { SkeletonAvatar } from '../../Loaders/SkeletonAvatar/index';
import { useDropdown } from '../../../hooks/useDropdown';
import { useUser } from '../../../hooks/useUser';
import { Colors } from '../../../assets/css/colors';

export const SidebarAvatar = () => {
    const { open, setOpen } = useDropdown();
    const { profileURL } = useUser();

    const handleDropDown = (value) => {
        setOpen(value);
    };
    return (
        <OutsideClick setLocalDropDownState={handleDropDown}>
            <>
                <Me loader={SkeletonAvatar} loaderProps={{ qty: 1 }}>
                    {({ avatar, name, last_name, color }) => (
                        <Avatar
                            size={25}
                            src={avatar}
                            margin="0 1em"
                            hide={false}
                            user={{ avatar, name, last_name, color }}
                            onClicked={() => setOpen(!open)}
                        />
                    )}
                </Me>
                <Dropdown open={open} width="125px" bg={Colors.white}>
                    <DropdownMenu menu="main" classMenu="menu-primary">
                        <DropdownItem goToURL={`/${profileURL}`}>
                            My Profile
                        </DropdownItem>
                        <Logout>
                            {({ doLogout }) => (
                                <DropdownItem onClicked={() => doLogout()}>
                                    Logout
                                </DropdownItem>
                            )}
                        </Logout>
                    </DropdownMenu>
                </Dropdown>
            </>
        </OutsideClick>
    );
};

SidebarAvatar.propTypes = {};
