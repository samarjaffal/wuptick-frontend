import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlEditComment } from '../graphql/gqlEditComment';
import { gqlGetCommentsForTask } from '../graphql/gqlGetCommentsForTask';
import PropTypes from 'prop-types';

export const EditCommentMutation = ({ children }) => {
    const [updateComment, { error, loading, data }] = useMutation(
        gqlEditComment,
        {
            onCompleted: (data) => {
                console.log('EditCommentMutation', data);
            },
        }
    );

    const doUpdateComment = useCallback((input) => {
        updateComment({
            variables: {
                input,
            },
            refetchQueries: [
                {
                    query: gqlGetCommentsForTask,
                    variables: { taskId: input.taskId },
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
    return children({ doUpdateComment, loading, error, data });
};

EditCommentMutation.propTypes = {
    children: PropTypes.any,
};
