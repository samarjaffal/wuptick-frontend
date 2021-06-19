import React from 'react';
import PropTypes from 'prop-types';
import { SidebarItem } from './SidebarItem';
import { SidebarHeader } from './SidebarHeader';
import { ProjectsSidebarItem } from './CustomItems/ProjectsSidebarItem';
import { Me } from '../Me/index';
import { SkeletonProjectsSidebar } from '../Loaders/SkeletonProjectsSidebar/index';
import { useUser } from '../../hooks/useUser';
import { useSidebar } from '../../hooks/useSidebar';
import { Colors } from '../../assets/css/colors';
import { Sidebar as SidebarStyled, Ul, Hr } from './styles';

export const Sidebar = () => {
    const { handleCollapse, isCollapsed } = useSidebar();

    const { profileURL } = useUser();

    const left = isCollapsed ? '-280px' : '0';
    return (
        <SidebarStyled left={left}>
            <SidebarHeader setCollapsed={handleCollapse} />
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

                <SidebarItem
                    title="My Updates"
                    icon="check-double"
                    url={`/my-updates`}
                    color={Colors.orange}
                    hasNotifications={true}
                />

                <Hr />
                <Me loaderProps={{ qty: 1 }} loader={SkeletonProjectsSidebar}>
                    {({ teams }) => (
                        <ProjectsSidebarItem
                            profileURL={profileURL}
                            teams={teams}
                        />
                    )}
                </Me>
                <Hr />
            </Ul>
        </SidebarStyled>
    );
};

Sidebar.propTypes = {};
