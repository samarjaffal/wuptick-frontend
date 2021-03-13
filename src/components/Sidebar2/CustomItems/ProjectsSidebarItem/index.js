import React from 'react';
import PropTypes from 'prop-types';
import { SidebarItem } from '../../SidebarItem/index';
import { ProjectSidebarItem } from './ProjectSidebarItem';
import { Colors } from '../../../../assets/css/colors';
import { Ul } from './styles';

export const ProjectsSidebarItem = ({ team, profileURL }) => {
    return (
        <>
            <SidebarItem
                title="Projects"
                icon="folder-open"
                url={`/${profileURL}?tab=projects`}
                color={Colors.orange}
            >
                <Ul>
                    {typeof team !== undefined &&
                        Object.keys(team).length > 0 &&
                        team.projects.map((project, index) => (
                            <ProjectSidebarItem key={index} project={project} />
                        ))}
                </Ul>
            </SidebarItem>
        </>
    );
};

ProjectsSidebarItem.propTypes = {
    team: PropTypes.object,
    profileURL: PropTypes.string,
};
