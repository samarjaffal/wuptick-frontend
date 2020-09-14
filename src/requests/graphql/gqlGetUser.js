import gql from 'graphql-tag';

export const gqlGetUser = gql`
    query getUser($userId: ID!) {
        getUser(userId: $userId) {
            _id
            name
            last_name
            avatar
            occupation
            email
            teams {
                _id
                name
                projects {
                    _id
                    name
                    image
                    members {
                        user {
                            _id
                            name
                            last_name
                            avatar
                        }
                    }
                }
            }
        }
    }
`;
