import React from 'react';
import { Router, Link } from '@reach/router';
import { Auth } from '../Auth/index';
import { Home } from '../Home/index';
import { TestPage } from '../TestPage';

export const Routes = () => {
    return (
        <Router>
            <Auth path="login" type="login" />
            <Auth path="register" type="register" />
            <Home path="/" />
            <TestPage path="test" />
        </Router>
    );
};
