import React from 'react';
import { useQuery } from 'react-apollo';
import PropTypes from 'prop-types';
import { gqlGetCommentsForTask } from '../graphql/gqlGetCommentsForTask';
import { SkeletonReplies } from '../../components/Loaders/SkeletonReplies/index';

export const GetCommentsForTaskQuery = ({ children, taskId }) => {
    const { error, loading, data } = useQuery(gqlGetCommentsForTask, {
        variables: { taskId },
        fetchPolicy: 'cache-and-network',
        onCompleted: (data) => {
            console.log(data, 'data GetCommentsForTaskQuery');
        },
    });
    if (loading || !data) {
        return <SkeletonReplies />;
    }

    if (error) {
        console.log(error, 'error');
    }
    return children({ loading, error, data });
};

GetCommentsForTaskQuery.propTypes = {
    children: PropTypes.any,
    taskId: PropTypes.string,
};
