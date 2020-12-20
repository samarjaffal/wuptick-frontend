import { useQuery } from 'react-apollo';
import { gqlGetProjectSidebar } from '../graphql/gqlGetProjectSidebar';
4;
import { useUser } from '../../hooks/useUser';
import PropTypes from 'prop-types';

export const GetProjectSidebarQuery = ({ children, projectId }) => {
    const { setCurrentProject } = useUser();
    const { error, loading, data } = useQuery(gqlGetProjectSidebar, {
        variables: { projectId },
        onCompleted: (data) => {
            console.log(data, 'data GetProjectSidebarQuery');
            setCurrentProject(data.getProject);
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

GetProjectSidebarQuery.propTypes = {
    children: PropTypes.any,
    projectId: PropTypes.string,
};
