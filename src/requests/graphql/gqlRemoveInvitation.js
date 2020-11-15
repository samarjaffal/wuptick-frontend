import gql from 'graphql-tag';

export const gqlRemoveInvitation = gql`
    mutation removeInvitation($invitationId: ID!) {
        removeInvitation(invitationId: $invitationId) {
            _id
            email
            created_at
            status
            projectId
            teamId
            updated_at
        }
    }
`;
