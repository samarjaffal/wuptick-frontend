import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlRemoveCollaborator } from '../graphql/gqlRemoveCollaborator';
import { gqlGetTask } from '../graphql/gqlgetTask';
import PropTypes from 'prop-types';

export const RemoveCollaboratorMutation = ({ children }) => {
    const [removeCollaborator, { error, loading, data }] = useMutation(
        gqlRemoveCollaborator,
        {
            onCompleted: (data) => {
                console.log('RemoveCollaboratorMutation', data);
            },
        }
    );

    const doRemoveCollaborator = useCallback((taskId, userId) => {
        removeCollaborator({
            variables: {
                taskId,
                userId,
            },
            refetchQueries: [
                {
                    query: gqlGetTask,
                    variables: { taskId },
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
    return children({ doRemoveCollaborator, loading, error, data });
};

RemoveCollaboratorMutation.propTypes = {
    children: PropTypes.any,
};
