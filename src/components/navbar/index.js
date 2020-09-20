import React, { useEffect } from 'react';
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
import { SkeletonAvatar } from '../Loaders/SkeletonAvatar/index';
import { LightSkeleton } from '../Loaders/SkeletonGeneral/index';
import { Logout } from '../Logout/index';
import { navigate } from '@reach/router';
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
    const { teamSelected, profileURL } = useUser();
    const { burguerButton, isActive } = useHamburguerMenu();
    const { open, setOpen } = useDropdown();
    const { match, screen, setMatch } = useSmallScreen();

    useEffect(() => {
        setMatch(screen.matches);
        if (open && match) {
            setOpen(false);
        }
    }, [match]);

    const handleTeamInfo = () => {
        return teamSelected.name == null ? (
            <LightSkeleton width="80px" margin="0 20px" />
        ) : (
            <AnchorTeam to="/">{teamSelected.name}</AnchorTeam>
        );
    };

    return (
        <Header>
            <NavContainer>
                <HamburguerMenuContainer ref={burguerButton}>
                    <HamburguerMenu icon="bars" />
                </HamburguerMenuContainer>
                <Anchor to="/">Wuptick</Anchor>
                <TeamContainer>
                    {/*  <AnchorTeam to="/">{teamSelected.name}</AnchorTeam> */}
                    {handleTeamInfo()}
                </TeamContainer>

                <Nav showMobileNav={isActive}>
                    <NavUl>
                        <NavItem
                            title="Projects"
                            option="projects"
                            url="/project/5ef7fe59db26218144f3f705"
                            icon="folder-open"
                        />
                        <NavItem
                            title="Teams"
                            option="teams"
                            url="/test"
                            icon="users"
                        />
                        <NavItem
                            title="Tasks"
                            option="tasks"
                            url="/"
                            icon="tasks"
                        />
                        {isActive && match && (
                            <NavLinkLogout>
                                <Logout>
                                    {({ doLogout }) => (
                                        <LogoutButton
                                            type="button"
                                            onClick={() => doLogout()}
                                        >
                                            Logout
                                        </LogoutButton>
                                    )}
                                </Logout>
                            </NavLinkLogout>
                        )}
                    </NavUl>
                </Nav>
                <OutsideClick>
                    <AvatarContainer>
                        <Me loader={SkeletonAvatar} loaderProps={{ qty: 1 }}>
                            {({ avatar }) => (
                                <Avatar
                                    size={25}
                                    src={avatar}
                                    margin="0 0 0 20px"
                                    onClicked={() => setOpen(!open)}
                                />
                            )}
                        </Me>
                        {/*  {open && (
                           
                        )} */}
                        <Dropdown open={open}>
                            <DropdownMenu menu="main" classMenu="menu-primary">
                                <DropdownItem
                                    leftIcon={
                                        <Me
                                            loader={SkeletonAvatar}
                                            loaderProps={{ qty: 1 }}
                                        >
                                            {({ avatar }) => (
                                                <Avatar
                                                    size={20}
                                                    src={avatar}
                                                />
                                            )}
                                        </Me>
                                    }
                                    goToURL={`/${profileURL}`}
                                >
                                    My Profile
                                </DropdownItem>
                                <Logout>
                                    {({ doLogout }) => (
                                        <DropdownItem
                                            onClicked={() => doLogout()}
                                        >
                                            Logout
                                        </DropdownItem>
                                    )}
                                </Logout>
                            </DropdownMenu>
                            {/*   <DropdownMenu
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
                                </DropdownMenu> */}
                        </Dropdown>
                    </AvatarContainer>
                </OutsideClick>
            </NavContainer>
        </Header>
    );
};
