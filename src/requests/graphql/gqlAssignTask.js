import gql from 'graphql-tag';

export const gqlAssignTask = gql`
    mutation assignTask($taskId: ID!, $userId: ID, $url: String) {
        assignTask(taskId: $taskId, userId: $userId, url: $url)
    }
`;
