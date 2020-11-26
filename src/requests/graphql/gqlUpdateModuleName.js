import gql from 'graphql-tag';

export const gqlUpdateModuleName = gql`
    mutation updateModuleName($moduleId: ID!, $input: EditModuleInput!) {
        editModule(moduleId: $moduleId, input: $input) {
            _id
            name
        }
    }
`;
