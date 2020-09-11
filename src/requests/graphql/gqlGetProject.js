import gql from 'graphql-tag';

export const gqlGetProject = gql`
    query getProject($projectId: ID!) {
        getProject(projectId: $projectId) {
            _id
            name
            description
            image
        }
    }
`;
