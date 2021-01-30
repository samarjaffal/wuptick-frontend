import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlDeleteComment } from '../graphql/gqlDeleteComment';
import { gqlGetCommentsForTask } from '../graphql/gqlGetCommentsForTask';
import PropTypes from 'prop-types';

export const DeleteCommentMutation = ({ children }) => {
    const [deleteComment, { error, loading, data }] = useMutation(
        gqlDeleteComment,
        {
            onCompleted: (data) => {
                console.log('DeleteCommentMutation', data);
            },
        }
    );

    const doDeleteComment = useCallback((commentId, taskId, topicId) => {
        deleteComment({
            variables: {
                commentId,
                taskId,
                topicId,
            },
            refetchQueries: [
                {
                    query: gqlGetCommentsForTask,
                    variables: { taskId },
                },
            ],
        });
    });

    if (loading) {
        console.log('loading');
    }

    if (error) {
        console.error(error, 'error');
    }
    return children({ doDeleteComment, loading, error, data });
};

DeleteCommentMutation.propTypes = {
    children: PropTypes.any,
};
