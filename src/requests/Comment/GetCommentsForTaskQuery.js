import { useQuery } from 'react-apollo';
import { gqlGetCommentsForTask } from '../graphql/gqlGetCommentsForTask';
import PropTypes from 'prop-types';

export const GetCommentsForTaskQuery = ({ children, taskId }) => {
    const { error, loading, data } = useQuery(gqlGetCommentsForTask, {
        variables: { taskId },
        fetchPolicy: 'cache-and-network',
        onCompleted: (data) => {
            console.log(data, 'data GetCommentsForTaskQuery');
        },
    });
    if (loading || !data) {
        return 'loading...';
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
