import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../../Dropdrown/index';
import { DropdownMenu } from '../../DropdownMenu/index';
import { DropdownItem } from '../../DropdownItem/index';
import { useDropdown } from '../../../hooks/useDropdown';
import { useUser } from '../../../hooks/useUser';
import { Colors } from '../../../assets/css/colors';
import { ChangeRoleDropDown } from '../ChangeRoleDropDown/index';

export const OptionsDropDown = ({ setOption, doRemoveMember, userId }) => {
    const { open, position, setOpen } = useDropdown();
    const { currentProject } = useUser();

    const handleRemoveMember = () => {
        let members = [...currentProject.members];
        let newMembers = members.filter((member) => member.user._id !== userId);
        currentProject.members = newMembers;
        doRemoveMember(currentProject._id, userId);
        setOpen(false);
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
            <ChangeRoleDropDown setOption={setOption} />
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
