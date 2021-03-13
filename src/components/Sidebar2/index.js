import React from 'react';
import PropTypes from 'prop-types';
import { SidebarItem } from './SidebarItem';
import { SidebarHeader } from './SidebarHeader';
import { useUser } from '../../hooks/useUser';
import { Colors } from '../../assets/css/colors';
import { Sidebar as SidebarStyled, Ul, Hr } from './styles';

export const Sidebar = () => {
    const { profileURL } = useUser();

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
                <SidebarItem
                    title="Projects"
                    icon="folder-open"
                    url={`/${profileURL}?tab=projects`}
                    color={Colors.orange}
                />
            </Ul>
        </SidebarStyled>
    );
};

Sidebar.propTypes = {};
