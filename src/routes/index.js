import React, { Fragment, useState, useEffect } from 'react';
import { Router, Link } from '@reach/router';
import { Auth } from '../pages/Auth/index';
import { Home } from '../pages/Home/index';
import { TestPage } from '../pages/TestPage';
import { useGlobalState } from '../hooks/useGlobalContext';

export const Routes = () => {
    const [loading, setLoading] = useState(true);
    const { activateAuth } = useGlobalState();
    console.log(loading, 'loading');

    useEffect(() => {
        fetch('http://localhost:27017/refresh_token', {
            method: 'POST',
            credentials: 'include',
        }).then(async (data) => {
            const { token } = await data.json();
            setLoading(false);
            activateAuth(token);
        });
    }, []);

    if (loading) {
        return <div>Loading..</div>;
    }

    return (
        <Fragment>
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
                </ul>
            </header>
            <Router>
                <Auth path="login" type="login" />
                <Auth path="register" type="register" />
                <Home path="/" />
                <TestPage path="test" />
            </Router>
        </Fragment>
    );
};
