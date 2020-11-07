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
            _id
            name
        }
    }
`;
