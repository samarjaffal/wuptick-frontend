import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlCreateTag } from '../graphql/gqlcreateTag';
import { gqlGetTags } from '../graphql/gqlGetTags';
import PropTypes from 'prop-types';

export const CreateTagMutation = ({ children, teamId }) => {
    const [createTag, { error, loading, data }] = useMutation(gqlCreateTag, {
        onCompleted: (data) => {
            console.log('CreateTagMutation', data);
        },
    });

    const doCreateTag = useCallback((input) => {
        createTag({
            variables: {
                input,
            },
            refetchQueries: [
                {
                    query: gqlGetTags,
                    variables: { teamId },
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
    return children({ doCreateTag, loading, error, data });
};

CreateTagMutation.propTypes = {
    children: PropTypes.any,
    teamId: PropTypes.string,
};
