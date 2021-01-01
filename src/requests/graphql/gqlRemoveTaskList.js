import gql from 'graphql-tag';

export const gqlRemoveTaskList = gql`
    mutation removeTaskList($moduleId: ID!, $listId: ID!) {
        removeTaskList(moduleId: $moduleId, listId: $listId)
    }
`;
