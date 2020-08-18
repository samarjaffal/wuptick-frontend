import gql from 'graphql-tag';

export const gqlMe = gql`
    query me {
        me {
            _id
            name
            last_name
            avatar
        }
    }
`;
