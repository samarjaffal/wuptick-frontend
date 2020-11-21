import gql from 'graphql-tag';

export const gqlCreateProject = gql`
    mutation createProject($input: ProjectInput!) {
        createProject(input: $input) {
            _id
            name
            description
            image
            color
            privacy
            status
            created_at
            owner {
                _id
                name
                last_name
            }
        }
    }
`;
