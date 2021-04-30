import { useQuery } from 'react-apollo';
import PropTypes from 'prop-types';
import { gqlGetFiles } from '../graphql/gqlGetFiles';

export const GetFilesQuery = ({ children, id }) => {
    const { error, loading, data } = useQuery(gqlGetFiles, {
        variables: { id },
        fetchPolicy: 'cache-and-network',
        onCompleted: (data) => {
            console.log(data, 'data GetFilesQuery');
        },
    });
    if (loading || !data) {
        return 'loading';
    }

    if (error) {
        console.log(error, 'error');
    }
    return children({ loading, error, data });
};

GetFilesQuery.propTypes = {
    children: PropTypes.any,
    taskId: PropTypes.string,
};
