import React from 'react';
import PropTypes from 'prop-types';
import { GetRolesQuery } from '../../../requests/Role/GetRolesQuery';
import { Dropdown } from '../../Dropdrown/index';
import { DropdownMenu } from '../../DropdownMenu/index';
import { DropdownItem } from '../../DropdownItem/index';
import { useDropdown } from '../../../hooks/useDropdown';
import { useUser } from '../../../hooks/useUser';
import { Colors } from '../../../assets/css/colors';

const setFirstLetterUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const OptionsDropDown = ({ setOption, doRemoveMember, userId }) => {
    const { open, position, setOpen } = useDropdown();
    const { currentProject } = useUser();

    const handleRemoveMember = () => {
        let members = [...currentProject.members];
        let newMembers = members.filter((member) => member.user._id !== userId);
        currentProject.members = newMembers;
        doRemoveMember(currentProject._id, userId);
    };

    const MenuChangeRole = () => {
        return (
            <GetRolesQuery>
                {({ data }) => {
                    const { getRoles: options } = data;
                    return (
                        <DropdownMenu
                            menu="change-role"
                            classMenu="menu-secondary"
                        >
                            {options.map((option) => (
                                <DropdownItem
                                    key={option._id}
                                    onClicked={() => {
                                        setOption(option);
                                        setOpen(false);
                                    }}
                                >
                                    {setFirstLetterUpperCase(option.name)}
                                </DropdownItem>
                            ))}
                            <DropdownItem
                                goToMenu="main"
                                onClicked={() => setOpen(true)}
                            >
                                <span>Go back</span>
                            </DropdownItem>
                        </DropdownMenu>
                    );
                }}
            </GetRolesQuery>
        );
    };

    return (
        <Dropdown
            open={open}
            width="200px"
            top={`${Math.round(position.top + 30)}px`}
            left={`${position.left}px`}
            bg={Colors.whitePrimary}
        >
            <DropdownMenu menu="main" classMenu="menu-primary">
                <DropdownItem
                    goToMenu="change-role"
                    onClicked={() => setOpen(true)}
                >
                    <span>Change Role</span>
                </DropdownItem>
                <DropdownItem onClicked={() => handleRemoveMember()}>
                    <span style={{ color: Colors.red }}>Remove Member</span>
                </DropdownItem>
            </DropdownMenu>
            {MenuChangeRole()}
        </Dropdown>
    );
};

OptionsDropDown.propTypes = {
    openDrop: PropTypes.bool,
    setOption: PropTypes.func,
    position: PropTypes.object,
    doRemoveMember: PropTypes.func,
    userId: PropTypes.string,
};
