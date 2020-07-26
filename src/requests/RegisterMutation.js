import { gqlRegister } from './graphql/gqlRegister';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import { useMutation } from 'react-apollo';

export const RegisterMutation = ({ children }) => {
    const [register, { error, loading, data }] = useMutation(gqlRegister, {
        onCompleted: () => navigate('/'),
    });
    const doRegister = (input) => {
        register({
            variables: {
                email: input.email,
                password: input.password,
            },
        });
    };
    console.log(data, 'data');
    return children({ doRegister, data, loading, error });
};

RegisterMutation.propTypes = {
    children: PropTypes.any,
};
