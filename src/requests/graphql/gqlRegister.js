import gql from 'graphql-tag';

/* export const gqlRegister = gql`
    mutation register($email: String!, $password: String!) {
        register(input: { email: $email, password: $password }) {
            _id
        }
    }
`; */

export const gqlRegister = gql`
    mutation register($email: String!, $password: String!) {
        register(input: { email: $email, password: $password }) {
            ... on Error {
                message
            }
            ... on User {
                _id
            }
        }
    }
`;
