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
            birthday
            teams {
                _id
                name
                members {
                    _id
                    name
                    last_name
                    avatar
                }
                projects {
                    _id
                    name
                    image
                    created_at
                    owner {
                        _id
                        name
                        last_name
                    }
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
