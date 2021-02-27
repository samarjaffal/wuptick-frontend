import gql from 'graphql-tag';

export const gqlRemoveCollaborator = gql`
    mutation removeCollaborator($taskId: ID!, $userId: ID!) {
        removeCollaborator(taskId: $taskId, userId: $userId)
    }
`;
