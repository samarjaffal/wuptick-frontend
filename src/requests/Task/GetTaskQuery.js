import { useQuery } from 'react-apollo';
import { gqlGetTask } from '../graphql/gqlgetTask';
import { useUser } from '../../hooks/useUser';
import PropTypes from 'prop-types';

export const GetTaskQuery = ({ children, taskId }) => {
    const { setCurrentTask } = useUser();
    const { error, loading, data } = useQuery(gqlGetTask, {
        variables: { taskId },
        onCompleted: (data) => {
            console.log(data, 'data getTask');
            setCurrentTask(data.getTask);
        },
    });
    if (loading) {
        console.log('loading...');
    }

    if (!data) {
        return '';
    }

    if (error) {
        console.log(error, 'error');
    }
    return children({ loading, error, data });
};

GetTaskQuery.propTypes = {
    children: PropTypes.any,
    taskId: PropTypes.string,
};
