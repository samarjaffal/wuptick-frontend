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
            color
            teams {
                _id
                name
                members {
                    _id
                    name
                    last_name
                    avatar
                    email
                }
                projects {
                    _id
                    name
                    description
                    image
                    created_at
                    color
                    privacy
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
