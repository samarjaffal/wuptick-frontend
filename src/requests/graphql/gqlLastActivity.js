import gql from 'graphql-tag';

export const gqlLastActivity = gql`
    query getLastActivity($team: ID!) {
        getLastActivity(teamId: $team) {
            _id
            type
            action
            user {
                userId
                name
                firstName
                lastName
                avatar
                color
            }
            dateFilter
            created_at
            updated_at
            body {
                logId
                name
                description
                info
                project {
                    projectId
                    name
                    image
                    color
                }
                comment {
                    commentId
                    comment
                }
            }
        }
    }
`;
