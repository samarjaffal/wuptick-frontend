import gql from 'graphql-tag';

export const gqlSaveModulesOrder = gql`
    mutation saveModulesOrder($moduleIds: [String]!, $projectId: ID!) {
        saveModulesOrder(moduleIds: $moduleIds, projectId: $projectId)
    }
`;
