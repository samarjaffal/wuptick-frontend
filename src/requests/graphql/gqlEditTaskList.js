import gql from 'graphql-tag';

export const gqlEditTaskList = gql`
    mutation editTaskList($moduleId: ID!, $listId: ID!, $name: String!) {
        editTaskList(moduleId: $moduleId, listId: $listId, name: $name)
    }
`;
