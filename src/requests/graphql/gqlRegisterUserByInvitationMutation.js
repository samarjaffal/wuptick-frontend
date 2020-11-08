import gql from 'graphql-tag';

export const gqlRegisterUserByInvitation = gql`
    mutation registerUserByInvitation(
        $email: String!
        $projectId: ID!
        $teamId: ID!
    ) {
        registerUserByInvitation(
            email: $email
            projectId: $projectId
            teamId: $teamId
        ) {
            ... on User {
                _id
                name
                last_name
            }
            ... on Invitation {
                _id
                email
                created_at
                status
                projectId
                teamId
                updated_at
            }
        }
    }
`;
