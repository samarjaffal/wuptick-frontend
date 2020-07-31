import React, { Fragment } from 'react';
import { Routes } from '../Routes/index';
import { Navbar } from '../../components/navbar';
import { useRefreshToken } from '../../hooks/useRefreshToken';
export const Layout = () => {
    const { refreshToken, loading, error } = useRefreshToken();

    if (loading) {
        return <div>Loading..</div>;
    }

    return (
        <Fragment>
            <Navbar />
            <Routes />
        </Fragment>
    );
};
