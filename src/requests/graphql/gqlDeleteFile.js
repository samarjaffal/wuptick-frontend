import gql from 'graphql-tag';

export const gqlDeleteFile = gql`
    mutation deleteFile($fileId: ID!) {
        deleteFile(fileId: $fileId)
    }
`;
