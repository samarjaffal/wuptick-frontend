import gql from 'graphql-tag';

export const gqlDeleteProject = gql`
    mutation deleteProject($projectId: ID!, $teamId: ID!) {
        deleteProject(projectId: $projectId, teamId: $teamId)
    }
`;
