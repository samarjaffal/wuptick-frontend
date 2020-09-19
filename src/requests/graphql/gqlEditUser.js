import gql from 'graphql-tag';

export const gqlEditUser = gql`
    mutation editUser($userId: ID!, $input: EditUserInput!) {
        editUser(userId: $userId, input: $input) {
            _id
            name
            last_name
            email
            occupation
            birthday
            avatar
        }
    }
`;
