import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { UserForm } from '../../components/UserForm';

export const Auth = ({ type }) => {
    return (
        <Fragment>
            {type == 'login' ? (
                <UserForm title="Login" type="login" />
            ) : (
                <UserForm title="Register" type="register" />
            )}
            ;
        </Fragment>
    );
};

Auth.propTypes = {
    type: PropTypes.string,
};
