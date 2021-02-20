import { useQuery } from 'react-apollo';
import { gqlGetTags } from '../graphql/gqlGetTags';
import { useUser } from '../../hooks/useUser';
import PropTypes from 'prop-types';

export const GetTagsQuery = ({ children }) => {
    const { teamSelected } = useUser();
    const { error, loading, data } = useQuery(gqlGetTags, {
        variables: { teamId: teamSelected._id },
        onCompleted: (data) => {
            console.log(data, 'data GetTagsQuery');
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

GetTagsQuery.propTypes = {
    children: PropTypes.any,
};
