import gql from 'graphql-tag';

export const gqlEditProject = gql`
    mutation editProject($projectId: ID!, $input: EditProjectInput!) {
        editProject(projectId: $projectId, input: $input) {
            _id
            name
            description
            image
            color
            privacy
            status
            created_at
            updated_at
            owner {
                _id
                name
                last_name
            }
        }
    }
`;
