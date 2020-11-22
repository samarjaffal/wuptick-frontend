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
            members {
                user {
                    _id
                    avatar
                    name
                    last_name
                    email
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
