import gql from 'graphql-tag';

export const gqlUpdateAvatar = gql`
    mutation updateAvatar($imgStr: String!, $fileName: String!) {
        updateAvatar(imgStr: $imgStr, fileName: $fileName)
    }
`;
