import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../../../Dropdrown/index';
import { DropdownMenu } from '../../../DropdownMenu/index';
import { DropdownItem } from '../../../DropdownItem/index';
import { useDropdown } from '../../../../hooks/useDropdown';
import { useUser } from '../../../../hooks/useUser';
import { Colors } from '../../../../assets/css/colors';

export const OptionsDropDown = ({ userId, doRemoveInvitation }) => {
    const { open, position, setOpen } = useDropdown();
    const { currentProject } = useUser();

    const handleRemoveInvitation = () => {
        doRemoveInvitation(userId, currentProject._id);
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
                <DropdownItem onClicked={() => handleRemoveInvitation()}>
                    <span style={{ color: Colors.red }}>Cancel Invitation</span>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

OptionsDropDown.propTypes = {
    openDrop: PropTypes.bool,
    setOption: PropTypes.func,
    position: PropTypes.object,
    doRemoveMember: PropTypes.func,
    userId: PropTypes.string,
    doRemoveInvitation: PropTypes.func,
};
