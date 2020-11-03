import gql from 'graphql-tag';

export const gqlRegister = gql`
    mutation register($email: String!, $password: String!, $token: String) {
        register(input: { email: $email, password: $password, token: $token }) {
            ... on Error {
                message
            }
            ... on User {
                _id
            }
        }
    }
`;
