import gql from 'graphql-tag';

export const gqlGetTask = gql`
    query getTask($taskId: ID!) {
        getTask(taskId: $taskId) {
            _id
            name
            owner {
                _id
                avatar
                name
                last_name
            }
            assigned {
                _id
                name
                last_name
                avatar
            }
            collaborators {
                _id
                avatar
                name
                last_name
            }
            deadline
            done
            description
            descriptionJson
            created_at
            tag {
                _id
                name
                color
            }
        }
    }
`;
