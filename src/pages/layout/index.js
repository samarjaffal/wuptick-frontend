import React, { Fragment } from 'react';
import { Routes } from '../Routes/index';
import { Navbar } from '../../components/Navbar';
import { useRefreshToken } from '../../hooks/useRefreshToken';
import { useUser } from '../../hooks/useUser';

export const Layout = () => {
    const { loading } = useRefreshToken();
    const { isLogged } = useUser();

    if (loading) {
        return <div>Loading..</div>;
    }

    return (
        <Fragment>
            {isLogged && <Navbar />}
            <Routes />
        </Fragment>
    );
};
