import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigate } from '@reach/router';
import { gqlLogout } from '../../requests/graphql/gqlLogout';
import { useUser } from '../../hooks/useUser';
import {
    Header,
    NavContainer,
    Nav,
    Avatar,
    Anchor,
    AnchorTeam,
    NavAnchor,
    NavAnchorTitle,
    NavUl,
    NavLink,
    TeamContainer,
    HamburguerMenu,
    HamburguerMenuContainer,
    NavLinkLogout,
    LogoutButton,
} from './styles';

export const Navbar = () => {
    const { isLogged, disableAuth } = useUser();

    const [logout, { error, loading, client }] = useMutation(gqlLogout, {
        onCompleted: () => {
            console.log('logout');
            disableAuth();
            client.resetStore();
            navigate('/');
        },
    });

    const ipad = window.matchMedia('screen and (max-width: 767px)');
    const burguerButton = useRef(null);
    ipad.addListener(validation);

    const [isActive, setIsActive] = useState(false);
    const isActiveRef = useRef(isActive);
    const [match, setMatch] = useState(false);

    useEffect(() => {
        setMatch(ipad.matches);
        if (match) {
            burguerButton.current.addEventListener('click', toggle);
            return () => {
                burguerButton.current.removeEventListener('click', toggle);
            };
        }
    }, [match]);

    function validation({ matches }) {
        if (matches) {
            setMatch(true);
        } else {
            setMatch(false);
        }
    }

    const toggle = () => {
        isActiveRef.current = !isActiveRef.current;
        setIsActive(isActiveRef.current);
    };

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
                        <NavLink>
                            <NavAnchor to="/" option="projects">
                                <FontAwesomeIcon icon="folder-open" />
                                <NavAnchorTitle>Projects</NavAnchorTitle>
                            </NavAnchor>
                        </NavLink>
                        <NavLink>
                            <NavAnchor to="/" option="teams">
                                <FontAwesomeIcon icon="users" />
                                <NavAnchorTitle>Teams</NavAnchorTitle>
                            </NavAnchor>
                        </NavLink>
                        <NavLink>
                            <NavAnchor to="/" option="tasks">
                                <FontAwesomeIcon icon="tasks" />
                                <NavAnchorTitle>Tasks</NavAnchorTitle>
                            </NavAnchor>
                        </NavLink>
                        {/*                     <li>
                        <Link to="test">Test</Link>
                    </li>
                    <li>
                        <Link to="login">Login</Link>
                    </li> */}
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
