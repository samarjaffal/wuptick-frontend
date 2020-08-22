import React from 'react';
import { MeQuery } from '../../requests/MeQuery';
import PropTypes from 'prop-types';

export const Me = ({ children }) => {
    return (
        <MeQuery>
            {({ error, data, loading }) => {
                let user;
                if (data && data.me) {
                    user = data.me;
                    return children({ ...user });
                }
                if (error) {
                    console.log(error, 'error me  component');
                }

                if (loading) {
                    return null;
                }
            }}
        </MeQuery>
    );
};

Me.propTypes = {
    children: PropTypes.any,
};
