import gql from 'graphql-tag';

export const gqlGetRoles = gql`
    query getRoles {
        getRoles {
            _id
            name
        }
    }
`;
