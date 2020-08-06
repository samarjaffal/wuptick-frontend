import { useCallback } from 'react';
import { useLazyQuery } from 'react-apollo';
import { gqlLogin } from './graphql/gqlLogin';
import PropTypes from 'prop-types';

export const LoginQuery = ({ children }) => {
    const [login, { error, loading, data }] = useLazyQuery(gqlLogin, {
        onCompleted: (data) => {
            console.log(data, 'data');
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
