import { useLazyQuery } from 'react-apollo';
import { gqlLogin } from './graphql/gqlLogin';
import PropTypes from 'prop-types';

export const LoginQuery = ({ children }) => {
    const [login, { error, loading, data }] = useLazyQuery(gqlLogin);
    const doLogin = (input) => {
        login({
            variables: {
                email: input.email,
                password: input.password,
            },
        });
    };
    console.log(data, 'data');
    return children({ doLogin, data, loading, error });
};

LoginQuery.propTypes = {
    children: PropTypes.any,
};
