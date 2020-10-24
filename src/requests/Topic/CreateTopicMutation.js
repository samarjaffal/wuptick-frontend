import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlCreateTopic } from '../graphql/gqlCreateTopic';
import { gqlGetProjectTopics } from '../graphql/gqlGetProjectTopics';
import PropTypes from 'prop-types';

export const CreateTopicMutation = ({ children }) => {
    const [createTopic, { error, loading, data }] = useMutation(
        gqlCreateTopic,
        {
            onCompleted: (data) => {
                console.log('CreateTopicMutation', data);
            },
        }
    );

    const doCreateTopic = useCallback((input) => {
        createTopic({
            variables: {
                input,
            },
            refetchQueries: [
                {
                    query: gqlGetProjectTopics,
                    variables: { projectId: input.project._id },
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
    return children({ doCreateTopic, loading, error, data });
};

CreateTopicMutation.propTypes = {
    children: PropTypes.any,
};
