import { useCallback } from 'react';
import { useLazyQuery } from 'react-apollo';
import { gqlLogin } from './graphql/gqlLogin';
import { useUser } from '../hooks/useUser';
import PropTypes from 'prop-types';

export const LoginQuery = ({ children }) => {
    const { activateAuth } = useUser();
    const [login, { error, loading, data }] = useLazyQuery(gqlLogin, {
        onCompleted: (data) => {
            activateAuth(data.login.token);
        },
    });
    const doLogin = useCallback((input) => {
        login({
            variables: {
                email: input.email,
                password: input.password,
            },
        });
    });
    return children({ doLogin, loading, error, data });
};

LoginQuery.propTypes = {
    children: PropTypes.any,
};
