import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlChangePassword } from './graphql/gqlChangePassword';
import PropTypes from 'prop-types';

export const ChangePasswordMutation = ({ children, modalRef }) => {
    const [changePassword, { error, loading, data }] = useMutation(
        gqlChangePassword,
        {
            onCompleted: (data) => {
                console.log('ChangePasswordMutation', data);
                modalRef.current.closeModal();
            },
        }
    );
    const doChangePassword = useCallback((input) => {
        changePassword({
            variables: {
                oldPassword: input.oldPassword,
                newPassword: input.newPassword,
            },
        });
    });

    if (error) {
        console.error(error, 'error');
    }

    return children({ doChangePassword, loading, error, data });
};

ChangePasswordMutation.propTypes = {
    children: PropTypes.any,
};
