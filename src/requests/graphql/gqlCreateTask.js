import gql from 'graphql-tag';

export const gqlCreateTask = gql`
    mutation createTask($input: TaskInput!, $moduleId: ID!, $listId: ID!) {
        createTask(input: $input, moduleId: $moduleId, listId: $listId)
    }
`;
