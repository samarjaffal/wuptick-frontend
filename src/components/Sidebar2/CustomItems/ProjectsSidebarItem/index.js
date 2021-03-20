import React from 'react';
import PropTypes from 'prop-types';
import { SidebarItem } from '../../SidebarItem/index';
import { ProjectSidebarItem } from './ProjectSidebarItem';
import { Colors } from '../../../../assets/css/colors';
import { Ul, ProjectsContainer } from './styles';

export const ProjectsSidebarItem = ({ teams, profileURL }) => {
    return (
        <>
            <SidebarItem
                title="Projects"
                icon="folder-open"
                url={`/${profileURL}?tab=projects`}
                color={Colors.orange}
            >
                <ProjectsContainer>
                    {teams.length > 0 &&
                        teams.map((team, index) => (
                            <Ul key={index}>
                                {typeof team !== undefined &&
                                    Object.keys(team).length > 0 &&
                                    team.projects.map((project, index) => (
                                        <ProjectSidebarItem
                                            key={index}
                                            project={project}
                                        />
                                    ))}
                            </Ul>
                        ))}
                </ProjectsContainer>
            </SidebarItem>
        </>
    );
};

ProjectsSidebarItem.propTypes = {
    teams: PropTypes.array,
    profileURL: PropTypes.string,
};
