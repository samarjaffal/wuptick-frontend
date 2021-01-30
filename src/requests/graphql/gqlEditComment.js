import gql from 'graphql-tag';

export const gqlEditComment = gql`
    mutation editComment($input: EditCommentInput!) {
        editComment(input: $input) {
            _id
            comments {
                _id
                comment
                commentJson
            }
        }
    }
`;
