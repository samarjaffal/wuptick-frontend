import gql from 'graphql-tag';

export const gqlCreateTag = gql`
    mutation createTag($input: TagInput!) {
        createTag(input: $input) {
            _id
            name
            color
        }
    }
`;
