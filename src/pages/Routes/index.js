import React, { Fragment } from 'react';
import { Router, navigate } from '@reach/router';
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
            <Oops path="oops" />
        </Router>
    ) : (
        <Router>
            <PublicRoute component={Auth} path="login" type="login" />
            <PublicRoute component={Auth} path="register" type="register" />
            <NotFound default />
            <Oops path="oops" />
        </Router>
    );
};

export const NotFound = ({ location }) => {
    const { isLogged } = useUser();

    const handleClick = () => {
        const url = isLogged ? '/' : 'login';
        navigate(url);
    };

    return (
        <div>
            <h1>
                Sorry, no match for <code>{location.pathname}</code>
            </h1>
            <button onClick={handleClick}>Take me back...</button>
        </div>
    );
};

export const Oops = () => <h1>Oops! something went wrong.</h1>;

export const Routes = () => {
    return (
        <Fragment>
            <DefaultRoutes />
        </Fragment>
    );
};
