import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlAddCollaborator } from '../graphql/gqlAddCollaborator';
import { gqlGetTask } from '../graphql/gqlgetTask';
import PropTypes from 'prop-types';

export const AddCollaboratorMutation = ({ children }) => {
    const [addCollaborator, { error, loading, data }] = useMutation(
        gqlAddCollaborator,
        {
            onCompleted: (data) => {
                console.log('AddCollaboratorMutation', data);
            },
        }
    );

    const doAddCollaborator = useCallback((taskId, userId) => {
        addCollaborator({
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
    return children({ doAddCollaborator, loading, error, data });
};

AddCollaboratorMutation.propTypes = {
    children: PropTypes.any,
};
