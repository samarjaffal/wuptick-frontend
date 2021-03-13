import React from 'react';
import PropTypes from 'prop-types';
import { SidebarItem } from './SidebarItem';
import { SidebarHeader } from './SidebarHeader';
import { SidebarSubItem } from './SidebarSubItem/index';
import { ProjectsSidebarItem } from './CustomItems/ProjectsSidebarItem';
import { useUser } from '../../hooks/useUser';
import { Colors } from '../../assets/css/colors';
import { Sidebar as SidebarStyled, Ul, Hr } from './styles';

export const Sidebar = ({ project }) => {
    const { profileURL, teamSelected } = useUser();

    return (
        <SidebarStyled>
            <SidebarHeader />
            <Ul>
                <SidebarItem
                    title="Home"
                    icon="home"
                    url={'/'}
                    color={Colors.primary}
                />
                <SidebarItem
                    title="Teams"
                    icon="users"
                    url={`/${profileURL}?tab=teams`}
                    color={Colors.yellow}
                />

                <Hr />
                <ProjectsSidebarItem
                    profileURL={profileURL}
                    team={teamSelected}
                />
            </Ul>
        </SidebarStyled>
    );
};

Sidebar.propTypes = {};
