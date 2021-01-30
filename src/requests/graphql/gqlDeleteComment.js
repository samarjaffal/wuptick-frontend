import gql from 'graphql-tag';

export const gqlDeleteComment = gql`
    mutation deleteComment($commentId: ID!, $taskId: ID, $topicId: ID) {
        deleteComment(commentId: $commentId, taskId: $taskId, topicId: $topicId)
    }
`;
