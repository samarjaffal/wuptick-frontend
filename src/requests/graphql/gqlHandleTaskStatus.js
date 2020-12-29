import gql from 'graphql-tag';

export const gqlHandleTaskStatus = gql`
    mutation handleTaskStatus($taskId: ID!, $input: EditTaskInput!) {
        editTask(taskId: $taskId, input: $input) {
            _id
        }
    }
`;
