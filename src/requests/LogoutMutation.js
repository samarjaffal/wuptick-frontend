import { useMutation } from 'react-apollo';
import { gqlLogout } from './graphql/gqlLogout';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import { useUser } from '../hooks/useUser';

export const LogoutMutation = ({ children }) => {
    const { disableAuth } = useUser();
    const [logout, { error, loading, client }] = useMutation(gqlLogout, {
        onCompleted: () => {
            console.log('logout');
            disableAuth();
            client.resetStore();
            navigate('/login');
        },
    });
    const doLogout = () => {
        logout();
    };
    return children({ doLogout, loading, error });
};

LogoutMutation.propTypes = {
    children: PropTypes.any,
};
