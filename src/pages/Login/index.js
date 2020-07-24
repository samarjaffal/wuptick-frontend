import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { UserForm } from '../../components/UserForm';

export const Login = ({ type }) => {
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

Login.propTypes = {
    type: PropTypes.string,
};
