import gql from 'graphql-tag';

export const gqlSetNotificationAsReadByUserId = gql`
    query setNotificationAsReadByUserId($externalId: ID!, $recipient: ID!) {
        setNotificationAsReadByUserId(
            externalId: $externalId
            recipient: $recipient
        )
    }
`;
