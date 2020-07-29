import { useLazyQuery } from 'react-apollo';
import { gqlLogin } from './graphql/gqlLogin';
import PropTypes from 'prop-types';
import { useGlobalState } from '../hooks/useGlobalContext';

export const LoginQuery = ({ children }) => {
    const { activateAuth } = useGlobalState();
    const [login, { error, loading, data }] = useLazyQuery(gqlLogin, {
        onCompleted: (data) => activateAuth(data.login.token),
    });
    const doLogin = (input) => {
        login({
            variables: {
                email: input.email,
                password: input.password,
            },
        });
    };
    return children({ doLogin, data, loading, error });
};

LoginQuery.propTypes = {
    children: PropTypes.any,
};
