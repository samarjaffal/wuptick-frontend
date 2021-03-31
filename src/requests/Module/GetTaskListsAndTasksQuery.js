import { useQuery } from 'react-apollo';
import { gqlGetTaskListsAndTasks } from '../graphql/gqlGetTaskListsAndTasks';
import { useUser } from '../../hooks/useUser';
import { useTask } from '../../hooks/useTask';
import PropTypes from 'prop-types';

export const GetTaskListsAndTasksQuery = ({ children, moduleId }) => {
    const { setCurrentModule } = useUser();
    const { setLists } = useTask();

    const { error, loading, data } = useQuery(gqlGetTaskListsAndTasks, {
        variables: { moduleId },
        fetchPolicy: 'cache-first',
        onCompleted: (data) => {
            console.log(data, 'data GetTaskListsAndTasks');
            setCurrentModule(data.getModule);
            setLists([...data.getModule.task_lists]);
        },
    });
    /*    if (loading || !data) {
        return 'loading...';
    }
 */
    if (error) {
        console.log(error, 'error');
    }
    return children({ loading, error, data });
};

GetTaskListsAndTasksQuery.propTypes = {
    children: PropTypes.any,
    projectId: PropTypes.string,
};
