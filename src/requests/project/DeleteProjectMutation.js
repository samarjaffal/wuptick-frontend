import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlDeleteProject } from '../graphql/gqlDeleteProject';
import { useUser } from '../../hooks/useUser';
import { gqlGetUser } from '../graphql/gqlGetUser';
import { Notification } from '../../shared/Notification';
import PropTypes from 'prop-types';

export const DeleteProjectMutation = ({ children, modalRef }) => {
    const { addNotification, customTypes, customTitles } = Notification();
    const { currentUser } = useUser();
    const [deleteProject, { error, loading, data }] = useMutation(
        gqlDeleteProject,
        {
            onCompleted: (data) => {
                console.log('DeleteProjectMutation', data);
                modalRef.current.closeModal();
                addNotification(
                    customTitles.success,
                    'Project Deleted ✅',
                    customTypes.success
                );
            },
        }
    );

    const doDeleteProject = useCallback((projectId, teamId) => {
        deleteProject({
            variables: {
                projectId,
                teamId,
            },
            refetchQueries: [
                {
                    query: gqlGetUser,
                    variables: {
                        userId: currentUser._id,
                    },
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
    return children({ doDeleteProject, loading, error, data });
};

DeleteProjectMutation.propTypes = {
    children: PropTypes.any,
};
