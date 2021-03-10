import React, { Fragment } from 'react';
import { Router, navigate } from '@reach/router';
import { Auth } from '../Auth/index';
import { Home } from '../Home/index';
import { TestPage } from '../TestPage';
import { Project } from '../Project/index';
import { Module } from '../Module';
import { PrivateRoute } from '../../components/PrivateRoute/index';
import { PublicRoute } from '../../components/PublicRoute/index';
import { useUser } from '../../hooks/useUser';
import { Profile } from '../Profile/index';
import { EditProfile } from '../Profile/EditProfile/index';
import { SetupProfile } from '../SetupProfile/index';
import { config } from '../../../config/index';

const DefaultRoutes = () => {
    const { isLogged, profileURL } = useUser();
    return isLogged ? (
        <Router>
            <PrivateRoute path="/" component={Home} />
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="test" component={TestPage} />
            <PrivateRoute path="/project/:id" component={Project} />
            <PrivateRoute
                path="/project/:projectId/module/:moduleId"
                component={Module}
            />
            <PrivateRoute path="/profile/:username" component={Profile} />
            <PrivateRoute path={`${profileURL}/edit`} component={EditProfile} />
            <PrivateRoute path="/setup-profile" component={SetupProfile} />
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
        const url = isLogged ? `${config.url}` : `${config.url}login`;
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
