import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProjectItem } from '../ProjectItem';
import { NoData } from '../../NoData/index';
import { DeleteModal } from '../../Modal/templates/DeleteModal/index';
import { DeleteProjectMutation } from '../../../requests/project/DeleteProjectMutation';
import { RemoveMemberMutation } from '../../../requests/project/RemoveMemberMutation';
import { useUser } from '../../../hooks/useUser';
import { Title, DropDownContainer, Button, Collapsed } from './styles';

const DropDown = ({ title, children }) => {
    const [isOpen, setOpen] = useState(true);
    return (
        <div>
            <DropDownContainer>
                <Button onClick={() => setOpen(!isOpen)}>
                    <FontAwesomeIcon
                        icon={isOpen ? 'caret-down' : 'caret-right'}
                    />
                </Button>
                <Title>{title}</Title>
            </DropDownContainer>
            <Collapsed open={isOpen}>{children}</Collapsed>
        </div>
    );
};

export const ListProjects = ({ teams, userId }) => {
    const [projectClicked, setProjectClicked] = useState({});
    const [teamClicked, setTeamClicked] = useState({});
    const [action, setAction] = useState('');
    const { currentUser } = useUser();

    const modalRef = useRef();
    const leaveModalRef = useRef();

    const openDeleteModal = (action) => {
        setAction(action);
        if (action == 'delete') {
            modalRef.current.openModal();
        } else if (action == 'leave') {
            leaveModalRef.current.openModal();
        }
    };

    const setProjectAndTeam = (project, team) => {
        setProjectClicked(project);
        setTeamClicked(team);
    };

    return (
        <div>
            {teams.length > 0 ? (
                teams.map((team, index) => {
                    return (
                        <DropDown key={index} title={`Team: ${team.name}`}>
                            {team.projects.map((project, index) => (
                                <ProjectItem
                                    key={index}
                                    project={project}
                                    userId={userId}
                                    teamId={team._id}
                                    openDeleteModal={openDeleteModal}
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
                        doDeleteProject(projectClicked._id, teamClicked);
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
};
