import gql from 'graphql-tag';

export const gqlGetProjectSidebar = gql`
    query getProjectSidebar($projectId: ID!) {
        getProject(projectId: $projectId) {
            _id
            name
            image
            color
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
            }
        }
    }
`;
