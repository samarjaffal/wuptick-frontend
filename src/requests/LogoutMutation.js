import { useMutation } from 'react-apollo';
import { gqlLogout } from './graphql/gqlLogout';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';

export const LogoutMutation = ({ children }) => {
    const [logout, { error, loading, data }] = useMutation(gqlLogout, {
        onCompleted: () => navigate('/'),
    });
    const doLogout = () => {
        logout();
    };
    return children({ doLogout, data, loading, error });
};

LogoutMutation.propTypes = {
    children: PropTypes.any,
};
