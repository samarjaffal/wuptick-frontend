import gql from 'graphql-tag';

export const gqlLastActivity = gql`
    query getLastActivity($team: ID!) {
        getLastActivity(teamId: $team) {
            _id
            user
            userId
            userAvatar
            team
            projectImg
            projectId
            projectName
            type
            dateFilter
            action
            created_at
            updated_at
            description
            info
            name
        }
    }
`;
