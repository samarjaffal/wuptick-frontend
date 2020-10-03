import gql from 'graphql-tag';

export const gqlChangePassword = gql`
    mutation changePassword($oldPassword: String!, $newPassword: String!) {
        changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {
            ... on AuthUserError {
                message
            }
            ... on OldPasswordError {
                message
            }

            ... on Error {
                message
            }
            ... on ChangePassword {
                _id
                password
            }
        }
    }
`;
