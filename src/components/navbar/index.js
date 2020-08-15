import React, { useState } from 'react';
import { useMutation } from 'react-apollo';
import { navigate } from '@reach/router';
import { gqlLogout } from '../../requests/graphql/gqlLogout';
import { Dropdown } from '../Dropdrown/index';
import { useUser } from '../../hooks/useUser';
import { useHamburguerMenu } from '../../hooks/useHamburguerMenu';
import { useSmallScreen } from '../../hooks/useSmallScreen';
import { NavItem } from '../NavItem/index';
import { DropdownMenu } from '../DropdownMenu/index';
import { DropdownItem } from '../DropdownItem/index';
import { DropdownContextProvider } from '../../context/DropdownContext';
import {
    Header,
    NavContainer,
    Nav,
    AvatarContainer,
    Avatar,
    Anchor,
    AnchorTeam,
    NavUl,
    TeamContainer,
    HamburguerMenu,
    HamburguerMenuContainer,
    NavLinkLogout,
    LogoutButton,
} from './styles';

export const Navbar = () => {
    const { isLogged, disableAuth } = useUser();
    const { burguerButton, isActive } = useHamburguerMenu();
    const [open, setOpen] = useState(false);
    const { match } = useSmallScreen();

    const [logout, { error, loading, client }] = useMutation(gqlLogout, {
        onCompleted: () => {
            console.log('logout');
            disableAuth();
            client.resetStore();
            navigate('/');
        },
    });

    if (loading) {
        return <div>Loading..</div>;
    }

    if (error) {
        console.log('error', error);
    }

    return (
        <Header>
            <NavContainer>
                <HamburguerMenuContainer ref={burguerButton}>
                    <HamburguerMenu icon="bars" />
                </HamburguerMenuContainer>
                <Anchor to="/">Wuptick</Anchor>
                <TeamContainer>
                    <AnchorTeam to="/">Team Name</AnchorTeam>
                </TeamContainer>

                <Nav showMobileNav={isActive}>
                    <NavUl>
                        <NavItem
                            title="Projects"
                            option="projects"
                            url="/"
                            icon="folder-open"
                        />
                        <NavItem
                            title="Teams"
                            option="teams"
                            url="/"
                            icon="users"
                        />
                        <NavItem
                            title="Tasks"
                            option="tasks"
                            url="/"
                            icon="tasks"
                        />
                        {match && isActive && (
                            <NavLinkLogout>
                                <LogoutButton
                                    type="button"
                                    onClick={() => logout()}
                                >
                                    Logout
                                </LogoutButton>
                            </NavLinkLogout>
                        )}
                        {/*   <li>
                        {isLogged && (
                            <button type="button" onClick={() => logout()}>
                                Logout
                            </button>
                        )}
                    </li> */}
                    </NavUl>
                </Nav>
                <AvatarContainer>
                    <Avatar
                        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        alt="avatar"
                        onClick={() => setOpen(!open)}
                    />
                    {open && (
                        <DropdownContextProvider>
                            <Dropdown>
                                <DropdownMenu
                                    menu="main"
                                    classMenu="menu-primary"
                                >
                                    <DropdownItem goToMenu="settings">
                                        My Profile
                                    </DropdownItem>
                                    <DropdownItem>Logout</DropdownItem>
                                </DropdownMenu>
                                <DropdownMenu
                                    menu="settings"
                                    classMenu="menu-secondary"
                                >
                                    <DropdownItem goToMenu="main" leftIcon="🧡">
                                        <h2>My Tutorial</h2>
                                    </DropdownItem>
                                    <DropdownItem leftIcon="🧡">
                                        HTML
                                    </DropdownItem>
                                    <DropdownItem leftIcon="🧡">
                                        CSS
                                    </DropdownItem>
                                    <DropdownItem leftIcon="🧡">
                                        JavaScript
                                    </DropdownItem>
                                    <DropdownItem leftIcon="🧡">
                                        Awesome!
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </DropdownContextProvider>
                    )}
                </AvatarContainer>
            </NavContainer>
        </Header>
    );
};
