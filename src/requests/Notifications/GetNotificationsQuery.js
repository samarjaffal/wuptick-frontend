import { useQuery } from 'react-apollo';
import PropTypes from 'prop-types';
import { gqlGetNotifications } from '../graphql/gqlGetNotifications';

export const GetNotificationsQuery = ({ children }) => {
    const { error, loading, data } = useQuery(gqlGetNotifications, {
        fetchPolicy: 'cache-and-network',
        onCompleted: (data) => {
            console.log(data, 'data GetNotificationsQuery');
        },
    });
    if (loading || !data) {
        return '';
    }

    if (error) {
        console.log(error, 'error');
    }
    return children({ loading, error, data });
};

GetNotificationsQuery.propTypes = {
    children: PropTypes.any,
};
