import gql from 'graphql-tag';

export const gqlMe = gql`
    query me {
        me {
            _id
            name
            last_name
            avatar
            teams {
                _id
                name
                projects {
                    _id
                    name
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
