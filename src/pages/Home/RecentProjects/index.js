import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Info } from '../../../components/Info/index';
import { ListContainer } from '../../../components/ListContainer/index';
import { useUser } from '../../../hooks/useUser';
import { useAvatar } from '../../../hooks/useAvatar';
import { Colors } from '../../../assets/css/colors';

export const RecentProjects = ({ teams }) => {
    const { generateProfileUrl, generateProjectUrl } = useUser();
    const { generateProjectAvatar } = useAvatar({});
    const RECENT_PROJECTS_QTY = 6;

    useEffect(() => { }, []);

    const allProjects = () => {
        const projects = teams.map(team => team.projects);
        return projects.flat();
    }

    const [projects] = useState(() => allProjects());

    return (
        <ListContainer
            title="Recent Projects"
            icon="folder-open"
            color={Colors.primary}
            button={false}
        >
            { projects.slice(0, RECENT_PROJECTS_QTY).map((project) => (
                <Info
                    name={project.name}
                    profileUrl={generateProfileUrl(
                        project.owner.name,
                        project.owner.last_name,
                        project.owner._id
                    )}
                    projectUrl={generateProjectUrl(
                        project._id
                    )}
                    owner={`${project.owner.name} ${project.owner.last_name}`}
                    time={project.created_at}
                    image={generateProjectAvatar(
                        project
                    )}
                    description="Project Avatar"
                    key={project._id}
                />
            ))}
        </ListContainer>
    )
}

RecentProjects.propTypes = {
    teams: PropTypes.array
}