import React, { Fragment } from 'react';
import { Router, Link } from '@reach/router';
import { Auth } from '../pages/Auth/index';
import { Home } from '../pages/Home/index';
import { TestPage } from '../pages/TestPage';

export const Routes = () => {
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
