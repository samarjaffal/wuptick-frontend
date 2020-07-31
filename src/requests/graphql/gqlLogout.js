import gql from 'graphql-tag';

export const gqlLogout = gql`
    mutation logout {
        logout
    }
`;
