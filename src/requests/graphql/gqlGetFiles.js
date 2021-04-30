import gql from 'graphql-tag';

export const gqlGetFiles = gql`
    query getFiles($id: ID!) {
        getFiles(id: $id) {
            _id
            parentId
            owner {
                _id
                name
                last_name
                avatar
                color
            }
            created_at
            parentUrl
            fileUrl
            additional_params
        }
    }
`;
