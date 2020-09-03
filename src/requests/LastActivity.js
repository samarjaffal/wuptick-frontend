import { useCallback, useEffect } from 'react';
import { useLazyQuery } from 'react-apollo';
import { gqlLastActivity } from './graphql/gqlLastActivity';
import { useUser } from '../hooks/useUser';
import PropTypes from 'prop-types';

export const LastActivityQuery = ({ children }) => {
    const { teamSelected } = useUser();
    const date = new Date().toISOString();
    /* const date = "2020-08-31T16:45:35.116Z"; */
    const [lastActivity, { error, loading, data }] = useLazyQuery(
        gqlLastActivity,
        {
            onCompleted: (data) => {
                console.log(data, 'LastActivityQuery data');
            },
        }
    );
    const doLastActivity = useCallback((teamId, date) => {
        lastActivity({
            variables: { team: teamId, date },
        });
    });

    useEffect(() => {
        if (teamSelected._id) doLastActivity(teamSelected._id, date);
    }, [teamSelected]);

    return children({ loading, error, data });
};

LastActivityQuery.propTypes = {
    children: PropTypes.any,
};
