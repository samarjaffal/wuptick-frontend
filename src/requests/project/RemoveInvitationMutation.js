import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlRemoveInvitation } from '../graphql/gqlRemoveInvitation';
import { gqlGetInvitationsForProject } from '../graphql/gqlGetInvitationsForProject';
import PropTypes from 'prop-types';

export const RemoveInvitationMutation = ({ children }) => {
    const [removeInvitation, { error, loading, data }] = useMutation(
        gqlRemoveInvitation,
        {
            onCompleted: (data) => {
                console.log('RemoveMemberMutation', data);
            },
        }
    );

    const doRemoveInvitation = useCallback((invitationId, projectId) => {
        removeInvitation({
            variables: {
                invitationId,
            },
            update: (store) => {
                const invitationsData = store.readQuery({
                    query: gqlGetInvitationsForProject,
                    variables: { projectId: projectId },
                });

                const {
                    getInvitationsForProject: invitations,
                } = invitationsData;
                const invitationsTemp = [...invitations];

                let newInvitations = invitationsTemp.filter(
                    (invitation) => invitation._id !== invitationId
                );

                console.log('newInvitations', newInvitations);

                store.writeQuery({
                    query: gqlGetInvitationsForProject,
                    variables: { projectId: projectId },
                    data: {
                        getInvitationsForProject: [...newInvitations],
                    },
                });
            },
        });
    });

    if (loading) {
        console.log('loading');
    }

    if (error) {
        console.error(error, 'error');
    }
    return children({ doRemoveInvitation, loading, error, data });
};

RemoveInvitationMutation.propTypes = {
    children: PropTypes.any,
};
