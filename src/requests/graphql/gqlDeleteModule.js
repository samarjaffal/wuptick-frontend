import gql from 'graphql-tag';

export const gqlDeleteModule = gql`
    mutation deleteModule($moduleId: ID!) {
        deleteModule(moduleId: $moduleId)
    }
`;
