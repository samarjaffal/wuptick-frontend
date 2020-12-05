import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlDeleteTeam } from '../graphql/gqlDeleteTeam';
import { gqlGetUser } from '../graphql/gqlGetUser';
import { useUser } from '../../hooks/useUser';
import { Notification } from '../../shared/Notification';
import PropTypes from 'prop-types';

export const DeleteTeamMutation = ({ children, modalRef }) => {
    const { addNotification, customTypes, customTitles } = Notification();
    const { currentUser } = useUser();

    const [deleteTeam, { error, loading, data }] = useMutation(gqlDeleteTeam, {
        onCompleted: (data) => {
            console.log('DeleteTeamMutation', data);
            modalRef.current.closeModal();
            addNotification(
                customTitles.success,
                'Team Deleted ✅',
                customTypes.success
            );
        },
    });

    const doDeleteTeam = useCallback((teamId) => {
        deleteTeam({
            variables: {
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
    return children({ doDeleteTeam, loading, error, data });
};

DeleteTeamMutation.propTypes = {
    children: PropTypes.any,
};
