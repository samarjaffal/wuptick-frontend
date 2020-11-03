import gql from 'graphql-tag';

export const gqlLogin = gql`
    query login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            ... on AuthUserError {
                message
            }
            ... on AuthUserNotConfirmedError {
                message
            }
            ... on Error {
                message
            }
            ... on AuthData {
                _id
                token
                tokenExpiration
            }
        }
    }
`;
