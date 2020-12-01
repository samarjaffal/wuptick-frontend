import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { LoggedLayout } from '../Layouts/LoggedLayout/index';
export const SetupProfile = () => {
    return (
        <LoggedLayout>
            <Helmet>
                <title>Wuptick - Project</title>
            </Helmet>
            <h1>Setup Profile...</h1>
        </LoggedLayout>
    );
};

SetupProfile.propTypes = {};
