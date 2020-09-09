import React from 'react';
import { LogoutMutation } from '../../requests/LogoutMutation';
import PropTypes from 'prop-types';

export const Logout = ({ children }) => {
    return (
        <LogoutMutation>
            {({ doLogout, loading, error }) => {
                if (loading) {
                    return <div>Loading...</div>;
                }

                if (error) {
                    console.log(error, 'error logout');
                }

                return children({ doLogout });
            }}
        </LogoutMutation>
    );
};

Logout.propTypes = {
    children: PropTypes.any,
};
