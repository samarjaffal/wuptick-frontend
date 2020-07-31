import React from 'react';
import { Link } from '@reach/router';
import { gqlLogout } from '../../requests/graphql/gqlLogout';
import { navigate } from '@reach/router';
import { useUser } from '../../hooks/useUser';
import { useMutation } from 'react-apollo';

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

    if (loading) {
        return <div>Loading..</div>;
    }

    if (error) {
        console.log('error', error);
    }

    return (
        <header>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="test">Test</Link>
                </li>
                <li>
                    <Link to="login">Login</Link>
                </li>
                <li>
                    {isLogged && (
                        <button type="button" onClick={() => logout()}>
                            Logout
                        </button>
                    )}
                </li>
            </ul>
        </header>
    );
};
