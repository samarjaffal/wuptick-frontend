import gql from 'graphql-tag';

export const gqlHideNotification = gql`
    mutation hideNotification($id: ID!) {
        hideNotification(id: $id)
    }
`;
