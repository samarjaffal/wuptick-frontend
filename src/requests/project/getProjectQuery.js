import { useQuery } from 'react-apollo';
import { gqlGetProject } from '../graphql/gqlGetProject';
import { useUser } from '../../hooks/useUser';
import PropTypes from 'prop-types';

export const GetProjectQuery = ({ children, projectId }) => {
    const { setCurrentProject } = useUser();
    const { error, loading, data } = useQuery(gqlGetProject, {
        variables: { projectId },
        onCompleted: (data) => {
            console.log(data, 'data GetProjectQuery');
            setCurrentProject(data.getProject);
        },
    });
    /*     if (loading || !data) {
        return 'loading jajaj...';
    } */

    if (error) {
        console.log(error, 'error');
    }
    return children({ loading, error, data });
};

GetProjectQuery.propTypes = {
    children: PropTypes.any,
    projectId: PropTypes.string,
};
