import gql from 'graphql-tag';

export const gqlGetTaskListsAndTasks = gql`
    query getTaskListsAndTasks($moduleId: ID!) {
        getModule(moduleId: $moduleId) {
            _id
            name
            task_lists {
                _id
                name
                tasks {
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
        }
    }
`;
