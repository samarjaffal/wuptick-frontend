import React, { Fragment } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import ReactNotification from 'react-notifications-component';
import { GlobalStyle } from './assets/css/GlobalStyle';
import { DatePickerStyle } from './assets/css/react-date-picker';
import { Helmet } from 'react-helmet';
import Context, { UserContextProvider } from './context/UserContext';
import { SidebarContextProvider } from './context/SidebarContext';
import { Layout } from './pages/layout/index';
import './dayjs-config';
import './components/FontAwesomeIcons/index';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

export const App = () => {
    return (
        <SidebarContextProvider>
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
                <DatePickerStyle />
                <Context.Consumer>{() => <Layout />}</Context.Consumer>
            </UserContextProvider>
        </SidebarContextProvider>
    );
};
