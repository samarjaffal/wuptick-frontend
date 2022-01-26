import React, { Fragment } from 'react';
import { Routes } from '../Routes/index';
import { useRefreshToken } from '../../hooks/useRefreshToken';
import { navigate } from '@reach/router';
export const Layout = () => {
    const { loading, error } = useRefreshToken();
    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        navigate('oops');
    }

    return (
        <Fragment>
            <Routes />
        </Fragment>
    );
};
