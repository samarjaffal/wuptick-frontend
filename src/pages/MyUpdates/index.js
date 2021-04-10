import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { LoggedLayout } from '../Layouts/LoggedLayout/index';

export const MyUpdates = () => {
    return (
        <LoggedLayout>
            <Helmet>
                <title>Wuptick - My Updates</title>
            </Helmet>
            <div>MyUpdates</div>
        </LoggedLayout>
    );
};

MyUpdates.propTypes = {};
