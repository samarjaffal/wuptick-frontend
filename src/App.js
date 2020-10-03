import React, { Fragment } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import ReactNotification from 'react-notifications-component';
import { GlobalStyle } from './assets/css/GlobalStyle';
import { Helmet } from 'react-helmet';
import Context, { UserContextProvider } from './context/UserContext';
import { Layout } from './pages/layout/index';
import './dayjs-config';
import './components/FontAwesomeIcons/index';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

export const App = () => {
    return (
        <UserContextProvider>
            <ReactNotification
                types={[
                    {
                        htmlClasses: ['w-success'],
                        name: 'w-success',
                    },
                    {
                        htmlClasses: ['w-error'],
                        name: 'w-error',
                    },
                    {
                        htmlClasses: ['w-info'],
                        name: 'w-info',
                    },
                ]}
            />
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
