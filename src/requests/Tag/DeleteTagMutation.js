import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlDeleteTag } from '../graphql/gqlDeleteTag';
import { gqlGetTags } from '../graphql/gqlGetTags';
import PropTypes from 'prop-types';

export const DeleteTagMutation = ({ children, teamId }) => {
    const [deleteTag, { error, loading, data }] = useMutation(gqlDeleteTag, {
        onCompleted: (data) => {
            console.log('DeleteTagMutation', data);
        },
    });

    const doDeleteTag = useCallback((tagId) => {
        deleteTag({
            variables: {
                tagId,
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
    return children({ doDeleteTag, loading, error, data });
};

DeleteTagMutation.propTypes = {
    children: PropTypes.any,
    teamId: PropTypes.string,
};
