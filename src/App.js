import React, { Fragment } from 'react';
import { Login } from './pages/Login';
import { GlobalStyle } from './assets/css/GlobalStyle';
import { Helmet } from 'react-helmet';

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
        <Login />
    </Fragment>
);
