import gql from 'graphql-tag';

export const gqlCreateModule = gql`
    mutation createModule($input: ModuleInput!) {
        createModule(input: $input) {
            _id
            name
            project {
                _id
            }
        }
    }
`;
