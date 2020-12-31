import gql from 'graphql-tag';

export const gqlUpdateTask = gql`
    mutation updateTask($taskId: ID!, $input: EditTaskInput!) {
        editTask(taskId: $taskId, input: $input) {
            _id
        }
    }
`;
