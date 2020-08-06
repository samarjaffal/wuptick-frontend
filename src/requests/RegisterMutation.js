import { useCallback } from 'react';
import { gqlRegister } from './graphql/gqlRegister';
import PropTypes from 'prop-types';
import { useMutation } from 'react-apollo';

export const RegisterMutation = ({ children }) => {
    const [register, { error, loading, data }] = useMutation(gqlRegister, {
        onCompleted: () => {
            console.log('completed');
        },
    });

    const doRegister = useCallback((input) => {
        register({
            variables: {
                email: input.email,
                password: input.password,
            },
        });
    });

    return children({ doRegister, loading, error, data });
};

RegisterMutation.propTypes = {
    children: PropTypes.any,
};
