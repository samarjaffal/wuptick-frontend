import React, { useEffect } from 'react';
import { Dropdown } from '../Dropdrown/index';
import { useUser } from '../../hooks/useUser';
import { useHamburguerMenu } from '../../hooks/useHamburguerMenu';
import { useSmallScreen } from '../../hooks/useSmallScreen';
import { NavItem } from '../NavItem/index';
import { DropdownMenu } from '../DropdownMenu/index';
import { DropdownItem } from '../DropdownItem/index';
import { useDropdown } from '../../hooks/useDropdown';
import { Image } from '../Image/index';
import { Avatar } from '../Avatar/index';
import { OutsideClick } from '../OutsideClick/index';
import { Me } from '../Me/index';
import { SkeletonAvatar } from '../Loaders/SkeletonAvatar/index';
import { LightSkeleton } from '../Loaders/SkeletonGeneral/index';
import { Logout } from '../Logout/index';
import Logo from '../../assets/images/logo.png';

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
    LogoContainer,
    LogoImg,
} from './styles';

export const Navbar = () => {
    const { teamSelected, profileURL } = useUser();
    const { burguerButton, isActive } = useHamburguerMenu();
    const { open, setOpen } = useDropdown();
    const { match, screen, setMatch } = useSmallScreen();

    const handleDropDown = (value) => {
        setOpen(value);
    };

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
                <LogoContainer>
                    <Anchor to="/">
                        <LogoImg src={Logo} alt="Wuptick Logo" />
                    </Anchor>
                </LogoContainer>

                <TeamContainer>
                    {/*  <AnchorTeam to="/">{teamSelected.name}</AnchorTeam> */}
                    {handleTeamInfo()}
                </TeamContainer>

                <Nav showMobileNav={isActive}>
                    <NavUl>
                        <NavItem
                            title="Projects"
                            option="projects"
                            url={`/${profileURL}?tab=projects`}
                            icon="folder-open"
                        />
                        <NavItem
                            title="Teams"
                            option="teams"
                            url={`/${profileURL}?tab=teams`}
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
                <OutsideClick setLocalDropDownState={handleDropDown}>
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
                        </Dropdown>
                    </AvatarContainer>
                </OutsideClick>
            </NavContainer>
        </Header>
    );
};
