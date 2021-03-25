import { useQuery } from 'react-apollo';
import { gqlGetProjectModules } from '../graphql/gqlGetProjectModules';
import PropTypes from 'prop-types';

export const GetProjectModules = ({ children, projectId }) => {
    const { error, loading, data } = useQuery(gqlGetProjectModules, {
        variables: { projectId },
        fetchPolicy: 'cache-and-network',
        onCompleted: (data) => {
            /*  console.log(data, 'data getProjectModules'); */
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

GetProjectModules.propTypes = {
    children: PropTypes.any,
    projectId: PropTypes.string,
};
