import { useQuery } from 'react-apollo';
import { gqlMe } from './graphql/gqlMe';
import { useUser } from '../hooks/useUser';
import PropTypes from 'prop-types';

export const MeQuery = ({ children }) => {
    const { setTeam } = useUser();
    const { error, loading, data } = useQuery(gqlMe, {
        onCompleted: (data) => {
            console.log(data, 'data meQuery');
            const { me: user } = data;
            const lsTeamId = localStorage.getItem('teamSelected');

            let team =
                lsTeamId !== null && typeof lsTeamId !== undefined
                    ? user.teams.find((team) => team._id == lsTeamId)
                    : user.teams[0];
            setTeam(team);
        },
    });
    return children({ loading, error, data });
};

MeQuery.propTypes = {
    children: PropTypes.any,
};
