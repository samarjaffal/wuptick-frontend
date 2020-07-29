import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import { setAccessToken as setToken } from './shared/GetAccessToken';
const Context = createContext();

export const Provider = ({ children }) => {
    let initialAT = '';
    const [accessToken, setAccessToken] = useState(initialAT);

    const value = {
        accessToken,
        setAccessToken,
        activateAuth: (token) => {
            setAccessToken(token);
            setToken(token);
            navigate('/');
        },
        disableAuth: () => {
            setAccessToken('');
            navigate('/');
        },
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;

Provider.propTypes = {
    children: PropTypes.node,
};
