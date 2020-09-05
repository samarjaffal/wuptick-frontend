import { useCallback, useEffect } from 'react';
import { useLazyQuery } from 'react-apollo';
import { gqlLastActivity } from './graphql/gqlLastActivity';
import { useUser } from '../hooks/useUser';
import PropTypes from 'prop-types';

export const LastActivityQuery = ({ children }) => {
    const { teamSelected } = useUser();
    const [lastActivity, { error, loading, data }] = useLazyQuery(
        gqlLastActivity,
        {
            onCompleted: (data) => {
                console.log(data, 'LastActivityQuery data');
            },
        }
    );
    const doLastActivity = useCallback((teamId) => {
        lastActivity({
            variables: { team: teamId },
        });
    });

    useEffect(() => {
        if (teamSelected._id) doLastActivity(teamSelected._id);
    }, [teamSelected]);

    return children({ loading, error, data });
};

LastActivityQuery.propTypes = {
    children: PropTypes.any,
};
