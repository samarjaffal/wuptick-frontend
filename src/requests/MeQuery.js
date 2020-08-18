import { useQuery } from 'react-apollo';
import { gqlMe } from './graphql/gqlMe';
import PropTypes from 'prop-types';

export const MeQuery = ({ children }) => {
    const { error, loading, data } = useQuery(gqlMe, {
        onCompleted: (data) => {
            console.log(data, 'data meQuery');
        },
    });
    return children({ loading, error, data });
};

MeQuery.propTypes = {
    children: PropTypes.any,
};
