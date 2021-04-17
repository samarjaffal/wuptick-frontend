import gql from 'graphql-tag';

export const gqlGetProject = gql`
    query getProject($projectId: ID!) {
        getProject(projectId: $projectId) {
            _id
            name
            description
            image
            color
            privacy
            modules_order
            members {
                user {
                    _id
                    avatar
                    name
                    last_name
                    email
                    color
                }
                role {
                    _id
                    name
                }
                team {
                    _id
                    name
                }
            }
        }
    }
`;
