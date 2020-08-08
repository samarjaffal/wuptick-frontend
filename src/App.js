import React from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import './components/FontAwesomeIcons/index';
import { GlobalStyle } from './assets/css/GlobalStyle';
import { Helmet } from 'react-helmet';
import Context, { UserContextProvider } from './context/UserContext';
/* import { Routes } from './routes/index'; */
import { Layout } from './pages/layout/index';
export const App = () => {
    return (
        <UserContextProvider>
            <Helmet>
                <title>Wuptick</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <GlobalStyle />
            <Context.Consumer>{() => <Layout />}</Context.Consumer>
        </UserContextProvider>
    );
};
