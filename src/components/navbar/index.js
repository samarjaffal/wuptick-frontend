import React, { useEffect } from 'react';
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
import { useDropdown } from '../../hooks/useDropdown';
import { Avatar } from '../Avatar/index';
import { OutsideClick } from '../OutsideClick/index';
import { Me } from '../Me/index';
import {
    Header,
    NavContainer,
    Nav,
    AvatarContainer,
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
    const { disableAuth } = useUser();
    const { burguerButton, isActive } = useHamburguerMenu();
    const { open, setOpen } = useDropdown();
    const { match } = useSmallScreen();

    useEffect(() => {
        if (open && match) {
            setOpen(false);
        }
    }, [match]);

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
                            url="/test"
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
                    </NavUl>
                </Nav>
                <OutsideClick>
                    <AvatarContainer>
                        <Me>
                            {({ avatar }) => (
                                <Avatar
                                    size={25}
                                    src={avatar}
                                    margin="0 0 0 20px"
                                    onClicked={() => setOpen(!open)}
                                />
                            )}
                        </Me>
                        {open && (
                            <Dropdown>
                                <DropdownMenu
                                    menu="main"
                                    classMenu="menu-primary"
                                >
                                    <DropdownItem
                                        leftIcon={
                                            <Me>
                                                {({ avatar }) => (
                                                    <Avatar
                                                        size={20}
                                                        src={avatar}
                                                    />
                                                )}
                                            </Me>
                                        }
                                        goToMenu="settings"
                                    >
                                        My Profile
                                    </DropdownItem>
                                    <DropdownItem onClicked={() => logout()}>
                                        Logout
                                    </DropdownItem>
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
                        )}
                    </AvatarContainer>
                </OutsideClick>
            </NavContainer>
        </Header>
    );
};
