import gql from 'graphql-tag';

export const gqlGetNotifications = gql`
    query getNotifications {
        getNotifications {
            _id
            type
            external_id {
                _id
                name
            }
            recipient {
                _id
                name
                last_name
                email
                avatar
            }
            created_at
            read_at
            url
            hide
        }
    }
`;
