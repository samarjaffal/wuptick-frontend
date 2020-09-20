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
            favorite_projects {
                _id
                name
                image
                created_at
                owner {
                    name
                    last_name
                }
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
                    owner {
                        name
                        last_name
                    }
                }
            }
        }
    }
`;
