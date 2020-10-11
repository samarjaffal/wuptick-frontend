import { useQuery } from 'react-apollo';
import { gqlGetProjectTopics } from '../graphql/gqlGetProjectTopics';
import PropTypes from 'prop-types';

export const GetProjectTopics = ({ children, projectId }) => {
    const { error, loading, data } = useQuery(gqlGetProjectTopics, {
        variables: { projectId },
        onCompleted: (data) => {
            console.log(data, 'data GetProjectTopics');
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

GetProjectTopics.propTypes = {
    children: PropTypes.any,
    projectId: PropTypes.string,
};
