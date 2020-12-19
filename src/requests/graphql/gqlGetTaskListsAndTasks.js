import gql from 'graphql-tag';

export const gqlGetTaskListsAndTasks = gql`
    query getTaskListsAndTasks($moduleId: ID!) {
        getModule(moduleId: $moduleId) {
            name
            task_lists {
                _id
                name
                tasks {
                    _id
                    name
                    assigned {
                        _id
                        name
                        last_name
                        avatar
                    }
                    deadline
                    done
                    description
                }
            }
        }
    }
`;
