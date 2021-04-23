import gql from 'graphql-tag';

export const gqlUpdateAvatar = gql`
    mutation updateAvatar($imgStr: String!) {
        updateAvatar(imgStr: $imgStr)
    }
`;
