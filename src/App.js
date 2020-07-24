import React, { Fragment } from 'react';
import { Login } from './pages/Login';
import { GlobalStyle } from './assets/css/GlobalStyle';
import { Helmet } from 'react-helmet';
import { Router } from '@reach/router';

export const App = () => (
    <Fragment>
        <Helmet>
            <title>Wuptick</title>
            <link
                href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
        </Helmet>
        <GlobalStyle />
        <Router>
            <Login path="/" />
            <Login path="login" type="login" />
            <Login path="register" type="register" />
        </Router>
    </Fragment>
);
