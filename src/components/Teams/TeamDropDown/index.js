import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from '../../Dropdrown/index';
import { DropdownMenu } from '../../DropdownMenu/index';
import { DropdownItem } from '../../DropdownItem/index';
import { useDropdown } from '../../../hooks/useDropdown';
import { useUser } from '../../../hooks/useUser';
import { RemoveMemberFromTeamMutation } from '../../../requests/Team/RemoveMemberFromTeamMutation';

export const TeamDropDown = ({ teamId, openMembersModal }) => {
    const { open, position } = useDropdown();
    const { currentUser } = useUser();

    return (
        <Dropdown
            open={open}
            transform="-91%"
            width="200px"
            top={`${Math.round(position.top + 30)}px`}
            left={`${position.left}px`}
        >
            <DropdownMenu menu="main" classMenu="menu-primary">
                <DropdownItem
                    leftIcon={<FontAwesomeIcon icon="edit" />}
                    onClicked={() => openMembersModal()}
                >
                    Edit
                </DropdownItem>
                <RemoveMemberFromTeamMutation>
                    {({ doRemoveMember }) => (
                        <DropdownItem
                            leftIcon={<FontAwesomeIcon icon="sign-out-alt" />}
                            onClicked={() =>
                                doRemoveMember(teamId, currentUser._id)
                            }
                        >
                            Leave Team
                        </DropdownItem>
                    )}
                </RemoveMemberFromTeamMutation>

                <DropdownItem
                    leftIcon={<FontAwesomeIcon icon="trash-alt" />}
                    onClicked={() => console.log('clicked 3')}
                >
                    Delete
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

TeamDropDown.propTypes = {
    teamId: PropTypes.string,
};
