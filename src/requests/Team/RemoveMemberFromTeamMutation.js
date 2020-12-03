import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlRemoveMemberFromTeam } from '../graphql/gqlRemoveMemberFromTeam';
import { gqlGetUser } from '../graphql/gqlGetUser';
import { Notification } from '../../shared/Notification';
import PropTypes from 'prop-types';

export const RemoveMemberFromTeamMutation = ({ children, modalRef = null }) => {
    const { addNotification, customTypes, customTitles } = Notification();
    const [removeMember, { error, loading, data }] = useMutation(
        gqlRemoveMemberFromTeam,
        {
            onCompleted: (data) => {
                console.log('RemoveMemberFromTeamMutation', data);
                if (modalRef) {
                    modalRef.current.closeModal();
                }
                addNotification(
                    customTitles.success,
                    'Removed Member successfully ✅',
                    customTypes.success
                );
            },
        }
    );

    const doRemoveMember = useCallback((teamId, userId) => {
        removeMember({
            variables: {
                teamId,
                userId,
            },
            refetchQueries: [
                {
                    query: gqlGetUser,
                    variables: {
                        userId,
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
    return children({ doRemoveMember, loading, error, data });
};

RemoveMemberFromTeamMutation.propTypes = {
    children: PropTypes.any,
};
