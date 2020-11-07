import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlRegisterUserByInvitation } from '../graphql/gqlRegisterUserByInvitationMutation';
import PropTypes from 'prop-types';

export const RegisterUserByInvitationMutation = ({ children }) => {
    const [registerInvitation, { error, loading, data }] = useMutation(
        gqlRegisterUserByInvitation,
        {
            onCompleted: () => {
                console.log('RegisterUserByInvitation', data);
            },
        }
    );
    const doRegisterInvitation = useCallback((input) => {
        registerInvitation({
            variables: {
                email: input.email,
                projectId: input.projectId,
                teamId: input.teamId,
            },
        });
    });

    /*  if (loading) {
        return 'loading edit user mutation...';
    } */

    if (error) {
        console.error(error, 'error');
    }
    return children({ doRegisterInvitation, loading, error, data });
};

RegisterUserByInvitationMutation.propTypes = {
    children: PropTypes.any,
};
