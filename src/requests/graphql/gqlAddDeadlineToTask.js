import gql from 'graphql-tag';

export const gqlAddDeadlineToTask = gql`
    mutation addDeadlineToTask($taskId: ID!, $date: String) {
        addDeadlineToTask(taskId: $taskId, date: $date)
    }
`;
