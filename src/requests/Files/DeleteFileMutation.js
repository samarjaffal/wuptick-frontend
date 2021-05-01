import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlDeleteFile } from '../graphql/gqlDeleteFile';
import { gqlGetFiles } from '../graphql/gqlGetFiles';
import PropTypes from 'prop-types';

export const DeleteFileMutation = ({ children, id }) => {
    const [deleteFile, { error, loading, data }] = useMutation(gqlDeleteFile, {
        onCompleted: (data) => {
            console.log('DeleteFileMutation', data);
        },
    });

    const doDeleteFile = useCallback((fileId) => {
        deleteFile({
            variables: {
                fileId,
            },
            refetchQueries: [
                {
                    query: gqlGetFiles,
                    variables: { id },
                },
            ],
        });
    });

    if (loading) {
        console.log('loading');
    }

    if (error) {
        console.error(error, 'error');
    }
    return children({ doDeleteFile, loading, error, data });
};

DeleteFileMutation.propTypes = {
    children: PropTypes.any,
};
