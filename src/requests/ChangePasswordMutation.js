import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { Notification } from '../shared/Notification';
import { gqlChangePassword } from './graphql/gqlChangePassword';
import PropTypes from 'prop-types';

export const ChangePasswordMutation = ({ children, modalRef }) => {
    const { addNotification, customTypes, customTitles } = Notification();
    const [changePassword, { error, loading, data }] = useMutation(
        gqlChangePassword,
        {
            onCompleted: (data) => {
                console.log('ChangePasswordMutation', data);
                modalRef.current.closeModal();
                addNotification(
                    customTitles.success,
                    'Your password was changed.',
                    customTypes.success
                );
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
        addNotification(
            customTitles.error,
            'An error ocurred changing your password.',
            customTypes.error
        );
    }

    return children({ doChangePassword, loading, error, data });
};

ChangePasswordMutation.propTypes = {
    children: PropTypes.any,
};
