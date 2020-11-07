import gql from 'graphql-tag';

export const gqlGetInvitationsForProject = gql`
    query getInvitationsForProject($projectId: ID!) {
        getInvitationsForProject(projectId: $projectId) {
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
