import gql from 'graphql-tag';

export const gqlLogin = gql`
    query login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            _id
            token
            tokenExpiration
        }
    }
`;
