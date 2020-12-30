import gql from 'graphql-tag';

export const gqlDeleteTask = gql`
    mutation deleteTask($taskId: ID!, $listId: ID!, $moduleId: ID!) {
        deleteTask(taskId: $taskId, listId: $listId, moduleId: $moduleId)
    }
`;
