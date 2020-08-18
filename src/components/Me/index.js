import React from 'react';
import { MeQuery } from '../../requests/MeQuery';
import PropTypes from 'prop-types';

export const Me = ({ children }) => {
    return (
        <MeQuery>
            {({ error, data }) => {
                let user;
                if (data && data.me) {
                    user = data.me;
                }
                if (error) {
                    console.log(error, 'error me  component');
                }
                return children({ ...user });
            }}
        </MeQuery>
    );
};

Me.propTypes = {
    children: PropTypes.any,
};
