import gql from 'graphql-tag';

export const gqlGetTags = gql`
    query getTags($teamId: ID!) {
        getTags(teamId: $teamId) {
            _id
            name
            color
        }
    }
`;
