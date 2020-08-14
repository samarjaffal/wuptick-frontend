import React from 'react';
import { useMutation } from 'react-apollo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigate } from '@reach/router';
import { gqlLogout } from '../../requests/graphql/gqlLogout';
import { useUser } from '../../hooks/useUser';
import { useHamburguerMenu } from '../../hooks/useHamburguerMenu';
import { useSmallScreen } from '../../hooks/useSmallScreen';
import { NavItem } from '../NavItem/index';
import {
    Header,
    NavContainer,
    Nav,
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
                <Avatar
                    src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                    alt="avatar"
                />
            </NavContainer>
        </Header>
    );
};
