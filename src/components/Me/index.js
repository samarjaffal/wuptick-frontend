import React from 'react';
import { MeQuery } from '../../requests/MeQuery';
import PropTypes from 'prop-types';
import { useUser } from '../../hooks/useUser';
export const Me = ({ children }) => {
    const { isLogged } = useUser();
    return isLogged ? (
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
    ) : null;
};

Me.propTypes = {
    children: PropTypes.any,
};
