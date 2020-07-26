import React from 'react';
import { Router } from '@reach/router';
import { Auth } from '../pages/Auth/index';
import { Home } from '../pages/Home/index';

export const Routes = () => {
    return (
        <Router>
            <Auth path="login" type="login" />
            <Auth path="register" type="register" />
            <Home path="/" />
        </Router>
    );
};
