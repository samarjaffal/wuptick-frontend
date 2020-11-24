import gql from 'graphql-tag';

export const gqlRemoveMember = gql`
    mutation removeMember($projectId: ID!, $userId: ID!) {
        removeMember(projectId: $projectId, userId: $userId)
    }
`;
