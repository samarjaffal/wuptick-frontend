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
                color
            }
            assigned {
                _id
                name
                last_name
                avatar
                color
                status
            }
            collaborators {
                _id
                avatar
                name
                last_name
                email
                color
                status
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
