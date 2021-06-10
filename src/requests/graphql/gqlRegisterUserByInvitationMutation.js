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
            ... on Member {
                user
                role
                team
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

            ... on InvalidUser {
                message
            }
        }
    }
`;
