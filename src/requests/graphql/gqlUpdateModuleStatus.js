import gql from 'graphql-tag';

export const gqlUpdateModuleStatus = gql`
    mutation updateModuleStatus($moduleId: ID!, $input: EditModuleInput!) {
        editModule(moduleId: $moduleId, input: $input) {
            _id
            name
            status
        }
    }
`;
