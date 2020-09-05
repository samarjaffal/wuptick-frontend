import React, { useEffect } from 'react';
import { navigate } from '@reach/router';
import { useUser } from '../../hooks/useUser';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ component: Component, path }) => {
    const { isLogged } = useUser();
    useEffect(() => {
        !isLogged && navigate('/login');
    }, [isLogged]);

    return <Component path={path} />;
};

PrivateRoute.propTypes = {
    component: PropTypes.any,
    path: PropTypes.string,
};
