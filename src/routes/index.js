import React from 'react';
import { Router } from '@reach/router';
import { Auth } from '../pages/Auth/index';
export const Routes = () => {
    return (
        <Router>
            <Auth path="/" />
            <Auth path="login" type="login" />
            <Auth path="register" type="register" />
        </Router>
    );
};
