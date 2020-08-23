import gql from 'graphql-tag';

export const gqlMe = gql`
    query me {
        me {
            _id
            name
            last_name
            avatar
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
