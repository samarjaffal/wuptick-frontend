import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProjectItem } from '../ProjectItem';
import { NoData } from '../../NoData/index';
import { DeleteModal } from '../../Modal/templates/DeleteModal/index';
import { DeleteProjectMutation } from '../../../requests/project/DeleteProjectMutation';
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

    const modalRef = useRef();

    const openDeleteModal = () => {
        modalRef.current.openModal();
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
