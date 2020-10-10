import gql from 'graphql-tag';

export const gqlGetProjectModules = gql`
    query getProjectModules($projectId: ID!) {
        getProjectModules(projectId: $projectId) {
            _id
            name
        }
    }
`;
