import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlUpdateAvatar } from '../graphql/gqlUpdateAvatar';
import PropTypes from 'prop-types';

export const UpdateAvatarMutation = ({ children, doAfterSave }) => {
    const [editAvatar, { error, loading, data }] = useMutation(
        gqlUpdateAvatar,
        {
            onCompleted: (data) => {
                console.log('UpdateAvatarMutation', data);
                doAfterSave();
            },
        }
    );
    const doEditAvatar = useCallback((imgStr, fileName) => {
        editAvatar({
            variables: {
                imgStr,
                fileName,
            },
        });
    });

    /*  if (loading) {
        return 'loading edit user mutation...';
    } */

    if (error) {
        console.error(error, 'error');
    }
    return children({ doEditAvatar, loading, error, data });
};

UpdateAvatarMutation.propTypes = {
    children: PropTypes.any,
};
