import gql from 'graphql-tag';

export const gqlAddTaskList = gql`
    mutation addTaskList($moduleId: ID!, $name: String!) {
        addTaskList(moduleId: $moduleId, name: $name) {
            _id
            name
        }
    }
`;
