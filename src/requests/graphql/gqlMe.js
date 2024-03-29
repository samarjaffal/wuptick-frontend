import gql from 'graphql-tag';

export const gqlMe = gql`
    query me {
        me {
            _id
            name
            last_name
            avatar
            email
            occupation
            birthday
            user_attempts
            color
            favorite_projects {
                _id
                name
                image
                created_at
                owner {
                    _id
                    name
                    last_name
                }
            }
            favorite_tasks {
                _id
            }
            teams {
                _id
                name
                owner {
                    name
                    last_name
                }
                projects {
                    _id
                    name
                    image
                    created_at
                    color
                    owner {
                        _id
                        name
                        last_name
                    }
                    members {
                        user {
                            _id
                            avatar
                            name
                            last_name
                            email
                            color
                        }
                        role {
                            _id
                            name
                        }
                    }
                }
                members {
                    _id
                    name
                    last_name
                    email
                    avatar
                    color
                }
            }
        }
    }
`;
