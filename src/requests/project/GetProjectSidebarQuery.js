import { useQuery } from 'react-apollo';
import { gqlGetProjectSidebar } from '../graphql/gqlGetProjectSidebar';
import PropTypes from 'prop-types';

export const GetProjectSidebarQuery = ({ children, projectId }) => {
    const { error, loading, data } = useQuery(gqlGetProjectSidebar, {
        variables: { projectId },
        onCompleted: (data) => {
            console.log(data, 'data GetProjectSidebarQuery');
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
