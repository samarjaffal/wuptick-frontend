import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';

const Context = createContext();

export const Provider = ({ children }) => {
    let initialAT = '';
    const [accessToken, setAccessToken] = useState(initialAT);

    const initialAuth = Boolean(window.localStorage.getItem('token'));
    const [isAuth, setIsAuth] = useState(initialAuth);

    const value = {
        accessToken,
        isAuth,
        activateAuth: (token) => {
            setAccessToken(token);
            setIsAuth(true);
            navigate('/');
        },
        disableAuth: () => {
            setAccessToken('');
            setIsAuth(false);
            navigate('/');
        },
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;

Provider.propTypes = {
    children: PropTypes.node,
};
