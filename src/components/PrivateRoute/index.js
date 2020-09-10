import React, { useEffect } from 'react';
import { navigate } from '@reach/router';
import { useUser } from '../../hooks/useUser';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ component: Component, path, ...rest }) => {
    const { isLogged, loading } = useUser();

    useEffect(() => {
        if (!loading && !isLogged) {
            navigate('/login');
        }
    }, [isLogged, loading]);
    return <Component path={path} {...rest} />;
};

PrivateRoute.propTypes = {
    component: PropTypes.any,
    path: PropTypes.string,
};
