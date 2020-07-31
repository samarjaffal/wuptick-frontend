import { useLazyQuery } from 'react-apollo';
import { gqlLogin } from './graphql/gqlLogin';
import { useUser } from '../hooks/useUser';
import { navigate } from '@reach/router';
import PropTypes from 'prop-types';

export const LoginQuery = ({ children }) => {
    const { activateAuth } = useUser();
    const [login, { error, loading, data }] = useLazyQuery(gqlLogin, {
        onCompleted: (data) => {
            activateAuth(data.login.token);
            navigate('/');
        },
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
