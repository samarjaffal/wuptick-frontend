import gql from 'graphql-tag';

export const gqlDeleteTag = gql`
    mutation deleteTag($tagId: ID!) {
        deleteTag(tagId: $tagId)
    }
`;
