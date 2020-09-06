import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import { Auth } from '../Auth/index';
import { Home } from '../Home/index';
import { TestPage } from '../TestPage';
import { PrivateRoute } from '../../components/PrivateRoute/index';
import { PublicRoute } from '../../components/PublicRoute/index';
import { useUser } from '../../hooks/useUser';

const DefaultRoutes = () => {
    const { isLogged } = useUser();

    return isLogged ? (
        <Router>
            <PrivateRoute path="/" component={Home} />
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="test" component={TestPage} />
            <NotFound default />
        </Router>
    ) : (
        <Router>
            <PublicRoute component={Auth} path="login" type="login" />
            <PublicRoute component={Auth} path="register" type="register" />
            <NotFound default />
        </Router>
    );
};

export const NotFound = ({ location }) => (
    <h1>
        Sorry, no match for <code>{location.pathname}</code>
    </h1>
);

export const Routes = () => {
    return (
        <Fragment>
            <DefaultRoutes />
        </Fragment>
    );
};
