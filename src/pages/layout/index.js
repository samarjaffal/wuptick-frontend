import React, { Fragment } from 'react';
import { Routes } from '../Routes/index';
import { useRefreshToken } from '../../hooks/useRefreshToken';
export const Layout = () => {
    const { loading } = useRefreshToken();
    if (loading) {
        return <div>Loading..</div>;
    }
    return (
        <Fragment>
            <Routes />
        </Fragment>
    );
};
