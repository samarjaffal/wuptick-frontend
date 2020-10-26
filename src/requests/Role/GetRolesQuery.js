import { useQuery } from 'react-apollo';
import { gqlGetRoles } from '../graphql/gqlGetRoles';
import PropTypes from 'prop-types';

export const GetRolesQuery = ({ children }) => {
    const { error, loading, data } = useQuery(gqlGetRoles, {
        onCompleted: (data) => {
            console.log(data, 'data GetRolesQuery');
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

GetRolesQuery.propTypes = {
    children: PropTypes.any,
};
