import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import { TeamItem } from './TeamItem/index';
import { NoData } from '../../NoData/index';
import { TeamDropDown } from '../TeamDropDown/index';
import { OutsideClick } from '../../OutsideClick/index';
import { useUser } from '../../../hooks/useUser';
import { useDropdown } from '../../../hooks/useDropdown';
import { DeleteTeamMutation } from '../../../requests/Team/DeleteTeamMutation';
import { RemoveMemberFromTeamMutation } from '../../../requests/Team/RemoveMemberFromTeamMutation';
import { TeamMembersModal } from '../../Modal/templates/TeamMembersModal/index';
import { DeleteModal } from '../../Modal/templates/DeleteModal/index';

export const ListTeams = ({ teams, userId }) => {
    const [team, setTeam] = useState({});
    const { currentUser } = useUser();
    const { openDropCallBack } = useDropdown();

    let membersModalRef = useRef();
    let deleteModalRef = useRef();
    let leaveModalRef = useRef();

    const openDeleteModal = (action) => {
        if (action == 'delete') {
            deleteModalRef.current.openModal();
        } else if (action == 'leave') {
            leaveModalRef.current.openModal();
        }
    };

    const setTeamSelected = (team) => {
        setTeam(team);
    };

    const handleDropDown = (value = null) => {
        value = value == null ? true : value;
        openDropCallBack(value);
    };

    const openMembersModal = () => {
        membersModalRef.current.openModal();
    };

    return (
        <>
            {teams.length > 0 ? (
                teams.map((team, index) => (
                    <TeamItem
                        key={index}
                        team={team}
                        userId={userId}
                        setTeamSelected={setTeamSelected}
                    />
                ))
            ) : (
                <NoData message="This user does not have teams yet." />
            )}
            {currentUser._id == userId &&
                ReactDom.createPortal(
                    <OutsideClick setLocalDropDownState={handleDropDown}>
                        <TeamDropDown
                            teamId={team._id}
                            openMembersModal={openMembersModal}
                            openDeleteModal={openDeleteModal}
                        />
                    </OutsideClick>,
                    document.getElementById('dropwdown-app')
                )}

            {currentUser._id == userId && (
                <TeamMembersModal modalRef={membersModalRef} team={team} />
            )}

            {currentUser._id == userId && (
                <DeleteTeamMutation modalRef={deleteModalRef}>
                    {({ doDeleteTeam, loading }) => {
                        const doFunc = () => {
                            doDeleteTeam(team._id);
                        };
                        return (
                            <DeleteModal
                                modalRef={deleteModalRef}
                                title={`Delete Team: ${team.name}?`}
                                doFunc={doFunc}
                                loading={loading}
                            />
                        );
                    }}
                </DeleteTeamMutation>
            )}

            {currentUser._id == userId && (
                <RemoveMemberFromTeamMutation modalRef={leaveModalRef}>
                    {({ doRemoveMember, loading }) => {
                        const doFunc = () => {
                            doRemoveMember(team._id, currentUser._id);
                        };
                        return (
                            <DeleteModal
                                modalRef={leaveModalRef}
                                title={`Are you sure do you want to leave this team?`}
                                doFunc={doFunc}
                                loading={loading}
                                ButtonText={'Leave Team'}
                                showMessage={false}
                            />
                        );
                    }}
                </RemoveMemberFromTeamMutation>
            )}
        </>
    );
};

ListTeams.propTypes = {
    teams: PropTypes.array,
    userId: PropTypes.string,
};
