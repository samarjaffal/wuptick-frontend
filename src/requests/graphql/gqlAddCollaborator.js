import gql from 'graphql-tag';

export const gqlAddCollaborator = gql`
    mutation addCollaborator($taskId: ID!, $userId: ID!) {
        addCollaborator(taskId: $taskId, userId: $userId)
    }
`;
