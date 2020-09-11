import { useQuery } from 'react-apollo';
import { gqlGetProject } from '../graphql/gqlGetProject';
import PropTypes from 'prop-types';

export const GetProjectQuery = ({ children, projectId }) => {
    const { error, loading, data } = useQuery(gqlGetProject, {
        variables: { projectId },
        onCompleted: (data) => {
            console.log(data, 'data GetProjectQuery');
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

GetProjectQuery.propTypes = {
    children: PropTypes.any,
    projectId: PropTypes.string,
};