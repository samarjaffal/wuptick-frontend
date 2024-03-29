import React, { useEffect } from 'react';
import { navigate } from '@reach/router';
import { useUser } from '../../hooks/useUser';
import PropTypes from 'prop-types';

export const PublicRoute = ({
    component: Component,
    path,
    type = null,
    ...rest
}) => {
    const { isLogged, loading } = useUser();
    useEffect(() => {
        if (!loading && isLogged) {
            navigate('/');
        }
    }, [isLogged, loading]);
    return <Component path={path} type={type} {...rest} />;
};

PublicRoute.propTypes = {
    component: PropTypes.any,
    path: PropTypes.string,
    type: PropTypes.any,
};
