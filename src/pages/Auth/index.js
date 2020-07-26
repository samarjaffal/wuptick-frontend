import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { UserForm } from '../../components/UserForm';
import { RegisterMutation } from '../../requests/RegisterMutation';
import { LoginQuery } from '../../requests/LoginQuery';

export const Auth = ({ type }) => {
    return (
        <Fragment>
            {type == 'login' ? (
                <LoginQuery>
                    {({ loading, error, doLogin }) => (
                        <UserForm
                            title="Login"
                            type="login"
                            error={error}
                            loading={loading}
                            onSubmit={doLogin}
                        />
                    )}
                </LoginQuery>
            ) : (
                <RegisterMutation>
                    {({ loading, error, doRegister }) => (
                        <UserForm
                            title="Register"
                            type="register"
                            error={error}
                            loading={loading}
                            onSubmit={doRegister}
                        />
                    )}
                </RegisterMutation>
            )}
            ;
        </Fragment>
    );
};

Auth.propTypes = {
    type: PropTypes.string,
};
