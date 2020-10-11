import gql from 'graphql-tag';

export const gqlGetProjectTopics = gql`
    query getProjectTopics($projectId: ID!) {
        getProjectTopics(projectId: $projectId) {
            _id
            name
            created_at
            description
            owner {
                _id
                name
                last_name
                avatar
            }
            module {
                _id
                name
            }
        }
    }
`;
