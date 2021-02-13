import gql from 'graphql-tag';

export const gqlUpdateTask = gql`
    mutation updateTask($taskId: ID!, $input: EditTaskInput!, $url: String) {
        editTask(taskId: $taskId, input: $input, url: $url) {
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
        }
    }
`;
