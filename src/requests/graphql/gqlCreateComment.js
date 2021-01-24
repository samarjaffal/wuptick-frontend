import gql from 'graphql-tag';

export const gqlCreateComment = gql`
    mutation createComment($input: CommentInput!) {
        createComment(input: $input) {
            _id
            count
            comments {
                _id
                comment
            }
        }
    }
`;
