import gql from 'graphql-tag';

export const gqlUpdateMemberRole = gql`
    mutation updateMemberRole($projectId: ID!, $userId: ID!, $roleId: ID!) {
        updateMemberRole(
            projectId: $projectId
            userId: $userId
            roleId: $roleId
        ) {
            _id
            name
        }
    }
`;
