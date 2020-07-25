import React, { Fragment } from 'react';
/* import { Auth } from './pages/Auth'; */
import { GlobalStyle } from './assets/css/GlobalStyle';
import { Helmet } from 'react-helmet';
/* s */
import Context, { Provider } from './context';
import { Routes } from './routes/index';

export const App = () => (
    <Provider>
        <Helmet>
            <title>Wuptick</title>
            <link
                href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
        </Helmet>
        <GlobalStyle />
        <Context.Consumer>{() => <Routes />}</Context.Consumer>
    </Provider>
);
