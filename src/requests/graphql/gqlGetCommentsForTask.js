import gql from 'graphql-tag';

export const gqlGetCommentsForTask = gql`
    query getCommentsForTask($taskId: ID!) {
        getCommentsForTask(taskId: $taskId) {
            _id
            comments {
                _id
                owner {
                    _id
                    name
                    last_name
                    avatar
                    color
                    status
                }
                comment
                commentJson
                created_at
            }
        }
    }
`;
