import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProjectItem } from '../ProjectItem';
import { NoData } from '../../NoData/index';
import { ButtonHome } from '../../ButtonHome/index';
import { DeleteModal } from '../../Modal/templates/DeleteModal/index';
import { AddProjectModal } from '../../Modal/templates/AddProjectModal/index';
import { DeleteProjectMutation } from '../../../requests/project/DeleteProjectMutation';
import { RemoveMemberMutation } from '../../../requests/project/RemoveMemberMutation';
import { CreateProjectMutation } from '../../../requests/project/CreateProjectMutation';
import { EditProjectMutation } from '../../../requests/project/EditProjectMutation';
import { useUser } from '../../../hooks/useUser';
import { Colors } from '../../../assets/css/colors';
import { FlexCenter } from '../../SharedComponents/styles';
import { Title, DropDownContainer, Button, Collapsed } from './styles';

const DropDown = ({ title, children, teamId, userId, openAddProjectModal }) => {
    const [isOpen, setOpen] = useState(true);
    const { currentUser } = useUser();

    return (
        <div>
            <DropDownContainer>
                <Button onClick={() => setOpen(!isOpen)}>
                    <FontAwesomeIcon
                        icon={isOpen ? 'caret-down' : 'caret-right'}
                    />
                </Button>

                <FlexCenter>
                    <Title>{title}</Title>
                    {currentUser._id == userId && (
                        <ButtonHome
                            url=""
                            icon="plus"
                            color={Colors.primary}
                            onClicked={() =>
                                openAddProjectModal(teamId, 'save')
                            }
                        >
                            New Project
                        </ButtonHome>
                    )}
                </FlexCenter>
            </DropDownContainer>
            <Collapsed open={isOpen}>{children}</Collapsed>
        </div>
    );
};

export const ListProjects = ({ teams, userId }) => {
    const [projectClicked, setProjectClicked] = useState({});
    const [teamClicked, setTeamClicked] = useState({});
    const { currentUser } = useUser();

    const modalRef = useRef();
    const leaveModalRef = useRef();
    const addProjectRef = useRef();
    const editProjectRef = useRef();

    const openDeleteModal = (action) => {
        if (action == 'delete') {
            modalRef.current.openModal();
        } else if (action == 'leave') {
            leaveModalRef.current.openModal();
        }
    };

    const setProjectAndTeam = (project, teamId) => {
        setProjectClicked(project);
        let team = teams.find((_team) => String(_team._id) == String(teamId));
        setTeamClicked(team);
    };

    const openAddProjectModal = (teamId, action) => {
        let team = teams.find((_team) => String(_team._id) == String(teamId));
        setTeamClicked(team);
        if (action == 'save') {
            addProjectRef.current.openModal();
        } else if (action == 'update') {
            editProjectRef.current.openModal();
        }
    };

    return (
        <div>
            {teams.length > 0 ? (
                teams.map((team, index) => {
                    return (
                        <DropDown
                            key={index}
                            title={`Team: ${team.name}`}
                            teamId={team._id}
                            userId={userId}
                            openAddProjectModal={openAddProjectModal}
                        >
                            {team.projects.map((project, index) => (
                                <ProjectItem
                                    key={index}
                                    project={project}
                                    userId={userId}
                                    teamId={team._id}
                                    openDeleteModal={openDeleteModal}
                                    openAddProjectModal={openAddProjectModal}
                                    setProjectAndTeam={setProjectAndTeam}
                                />
                            ))}
                        </DropDown>
                    );
                })
            ) : (
                <NoData message="This user has no projects yet." />
            )}
            <DeleteProjectMutation modalRef={modalRef}>
                {({ doDeleteProject, loading }) => {
                    const doFunc = () => {
                        doDeleteProject(projectClicked._id, teamClicked._id);
                    };
                    return (
                        <DeleteModal
                            modalRef={modalRef}
                            title={`Delete project: ${projectClicked.name}?`}
                            doFunc={doFunc}
                            loading={loading}
                        />
                    );
                }}
            </DeleteProjectMutation>
            <RemoveMemberMutation modalRef={leaveModalRef}>
                {({ doRemoveMember, loading }) => {
                    const doFunc = () => {
                        doRemoveMember(projectClicked._id, currentUser._id);
                    };

                    return (
                        <DeleteModal
                            modalRef={leaveModalRef}
                            title={`Are you sure do you want to leave this project?`}
                            doFunc={doFunc}
                            loading={loading}
                            ButtonText={'Leave Project'}
                            showMessage={false}
                        />
                    );
                }}
            </RemoveMemberMutation>
            <CreateProjectMutation modalRef={addProjectRef}>
                {({ doCreateProject, loading }) => (
                    <AddProjectModal
                        modalRef={addProjectRef}
                        doFunction={doCreateProject}
                        loading={loading}
                        newTeam={teamClicked}
                        action="save"
                    />
                )}
            </CreateProjectMutation>
            <EditProjectMutation modalRef={editProjectRef}>
                {({ doEditProject, loading }) => (
                    <AddProjectModal
                        modalRef={editProjectRef}
                        action="update"
                        loading={loading}
                        doFunction={doEditProject}
                        newTeam={teamClicked}
                        _project={projectClicked}
                    />
                )}
            </EditProjectMutation>
        </div>
    );
};
ListProjects.propTypes = {
    teams: PropTypes.array,
    userId: PropTypes.string,
};
DropDown.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    addProjectRef: PropTypes.any,
    teamId: PropTypes.string,
    userId: PropTypes.string,
    openAddProjectModal: PropTypes.func,
};
