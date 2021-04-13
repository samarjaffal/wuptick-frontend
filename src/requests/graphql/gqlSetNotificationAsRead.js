import gql from 'graphql-tag';

export const gqlSetNotificationAsRead = gql`
    mutation setNotificationAsRead($ids: [ID]) {
        setNotificationAsRead(ids: $ids)
    }
`;
