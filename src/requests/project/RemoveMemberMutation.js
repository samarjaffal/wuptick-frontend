import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlRemoveMember } from '../graphql/gqlRemoveMember';
import { gqlGetProject } from '../graphql/gqlGetProject';
import PropTypes from 'prop-types';

export const RemoveMemberMutation = ({ children }) => {
    const [removeMember, { error, loading, data }] = useMutation(
        gqlRemoveMember,
        {
            onCompleted: (data) => {
                console.log('RemoveMemberMutation', data);
            },
        }
    );

    const doRemoveMember = useCallback((projectId, userId) => {
        removeMember({
            variables: {
                projectId,
                userId,
            },
            refetchQueries: [
                {
                    query: gqlGetProject,
                    variables: { projectId },
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
    return children({ doRemoveMember, loading, error, data });
};

RemoveMemberMutation.propTypes = {
    children: PropTypes.any,
};
