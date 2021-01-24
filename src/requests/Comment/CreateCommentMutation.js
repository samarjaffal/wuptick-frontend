import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlCreateComment } from '../graphql/gqlCreateComment';
import { gqlGetCommentsForTask } from '../graphql/gqlGetCommentsForTask';
import PropTypes from 'prop-types';

export const CreateCommentMutation = ({ children }) => {
    const [createComment, { error, loading, data }] = useMutation(
        gqlCreateComment,
        {
            onCompleted: (data) => {
                console.log('AddTaskListMutation', data);
            },
        }
    );

    const doCreateComment = useCallback((input) => {
        createComment({
            variables: {
                input,
            },
            refetchQueries: [
                {
                    query: gqlGetCommentsForTask,
                    variables: { taskId: input.task._id },
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
    return children({ doCreateComment, loading, error, data });
};

CreateCommentMutation.propTypes = {
    children: PropTypes.any,
};
