import gql from 'graphql-tag';

export const gqlAssignTask = gql`
    mutation assignTask($taskId: ID!, $userId: ID) {
        assignTask(taskId: $taskId, userId: $userId)
    }
`;
