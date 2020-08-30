import gql from 'graphql-tag';

export const gqlLastActivity = gql`
    query getLastActivity($team: ID!) {
        getLastActivity(teamId: $team) {
            _id
            user
            userId
            userAvatar
            team
            type
            dateFilter
            action
            created_at
            updated_at
            description
            name
        }
    }
`;
