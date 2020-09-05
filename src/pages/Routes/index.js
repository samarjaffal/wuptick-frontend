import React from 'react';
import { Router, Link } from '@reach/router';
import { Auth } from '../Auth/index';
import { Home } from '../Home/index';
import { TestPage } from '../TestPage';
import { PrivateRoute } from '../../components/PrivateRoute/index';
import { PublicRoute } from '../../components/PublicRoute/index';

export const Routes = () => {
    return (
        <Router>
            <PublicRoute component={Auth} path="login" type="login" />
            <PublicRoute component={Auth} path="register" type="register" />
            <Auth path="register" type="register" />
            <PrivateRoute path="/" component={Home} />
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="test" component={TestPage} />
        </Router>
    );
};
