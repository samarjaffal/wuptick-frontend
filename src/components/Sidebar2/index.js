import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../../context/SidebarContext';
import { SidebarItem } from './SidebarItem';
import { SidebarHeader } from './SidebarHeader';
import { ProjectsSidebarItem } from './CustomItems/ProjectsSidebarItem';
import { useUser } from '../../hooks/useUser';
import { Colors } from '../../assets/css/colors';
import { Sidebar as SidebarStyled, Ul, Hr } from './styles';

export const Sidebar = () => {
    const { isCollapsed, setCollapsed } = useContext(Context);

    const { profileURL, teamSelected } = useUser();

    const left = isCollapsed ? '-280px' : '0';
    return (
        <SidebarStyled left={left}>
            <SidebarHeader setCollapsed={setCollapsed} />
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
