import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { SidebarItem } from '../../SidebarItem/index';
import { TeamSidebarItem } from '../TeamSidebarItem/index';
import { Colors } from '../../../../assets/css/colors';
import { Ul, ProjectsContainer } from './styles';

export const ProjectsSidebarItem = ({ teams, profileURL }) => {
    useEffect(() => {
        console.log(teams, 'teams');
    }, [teams]);

    return (
        <>
            <SidebarItem
                title="Projects"
                icon="folder-open"
                url={`/${profileURL}?tab=projects`}
                color={Colors.orange}
            >
                <ProjectsContainer>
                    <Ul >
                        {teams.length > 0 &&
                            teams.map((team) => (
                                <TeamSidebarItem key={team._id} team={team} />
                            ))}
                    </Ul>
                </ProjectsContainer>
            </SidebarItem>
        </>
    );
};

ProjectsSidebarItem.propTypes = {
    teams: PropTypes.array,
    profileURL: PropTypes.string,
};
