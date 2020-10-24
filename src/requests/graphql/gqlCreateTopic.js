import gql from 'graphql-tag';

export const gqlCreateTopic = gql`
    mutation createTopic($input: TopicInput!) {
        createTopic(input: $input) {
            _id
            name
            created_at
            owner {
                name
            }
        }
    }
`;
