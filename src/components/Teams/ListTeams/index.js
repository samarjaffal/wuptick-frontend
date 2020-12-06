import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import { TeamItem } from './TeamItem/index';
import { NoData } from '../../NoData/index';
import { TeamDropDown } from '../TeamDropDown/index';
import { ButtonHome } from '../../ButtonHome/index';
import { OutsideClick } from '../../OutsideClick/index';
import { useUser } from '../../../hooks/useUser';
import { useDropdown } from '../../../hooks/useDropdown';
import { CreateTeamMutation } from '../../../requests/Team/CreateTeamMutation';
import { DeleteTeamMutation } from '../../../requests/Team/DeleteTeamMutation';
import { RemoveMemberFromTeamMutation } from '../../../requests/Team/RemoveMemberFromTeamMutation';
import { EditTeamMutation } from '../../../requests/Team/EditTeamMutation';
import { TeamMembersModal } from '../../Modal/templates/TeamMembersModal/index';
import { DeleteModal } from '../../Modal/templates/DeleteModal/index';
import { AddTeamModal } from '../../Modal/templates/AddTeamModal/index';
import { Colors } from '../../../assets/css/colors';
import { Hr } from './styles';

export const ListTeams = ({ teams, userId }) => {
    const [team, setTeam] = useState({});
    const { currentUser } = useUser();
    const { openDropCallBack } = useDropdown();

    let membersModalRef = useRef();
    let deleteModalRef = useRef();
    let leaveModalRef = useRef();
    let addTeamModalRef = useRef();

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
            {currentUser._id == userId && (
                <div>
                    <ButtonHome
                        url=""
                        icon="plus"
                        color={Colors.primary}
                        onClicked={() => addTeamModalRef.current.openModal()}
                    >
                        New Team
                    </ButtonHome>
                </div>
            )}
            <Hr />

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
                <CreateTeamMutation modalRef={addTeamModalRef}>
                    {({ doCreateTeam, loading }) => (
                        <AddTeamModal
                            modalRef={addTeamModalRef}
                            loading={loading}
                            createTeam={doCreateTeam}
                        />
                    )}
                </CreateTeamMutation>
            )}

            {currentUser._id == userId && (
                <EditTeamMutation>
                    {({ doEditTeam, loading }) => (
                        <TeamMembersModal
                            modalRef={membersModalRef}
                            team={team}
                            doFunc={doEditTeam}
                            loading={loading}
                        />
                    )}
                </EditTeamMutation>
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
