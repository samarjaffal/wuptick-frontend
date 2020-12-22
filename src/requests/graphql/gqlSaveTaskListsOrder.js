import gql from 'graphql-tag';

export const gqlSaveTaskListsOrder = gql`
    mutation saveTaskListsOrder($moduleId: ID!, $taskLists: [TaskListsInput]!) {
        saveTaskListsOrder(moduleId: $moduleId, taskLists: $taskLists)
    }
`;
