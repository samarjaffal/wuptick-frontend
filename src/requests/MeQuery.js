import { useQuery } from 'react-apollo';
import { gqlMe } from './graphql/gqlMe';
import { useUser } from '../hooks/useUser';
import PropTypes from 'prop-types';

export const MeQuery = ({ children }) => {
    const { setTeamSelected } = useUser();
    const { error, loading, data } = useQuery(gqlMe, {
        onCompleted: (data) => {
            console.log(data, 'data meQuery');
            const { me: user } = data;
            setTeamSelected(user.teams[0]);
        },
    });
    return children({ loading, error, data });
};

MeQuery.propTypes = {
    children: PropTypes.any,
};
