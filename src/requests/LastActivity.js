import { useCallback, useEffect } from 'react';
import { useLazyQuery } from 'react-apollo';
import { gqlLastActivity } from './graphql/gqlLastActivity';
import { useUser } from '../hooks/useUser';
import PropTypes from 'prop-types';

export const LastActivityQuery = ({ children }) => {
    const { currentUser } = useUser();
    const [lastActivity, { error, loading, data }] = useLazyQuery(
        gqlLastActivity,
        {
            onCompleted: (data) => {
                console.log(data, 'LastActivityQuery data');
            },
        }
    );
    const doLastActivity = useCallback((userId) => {
        lastActivity({
            variables: { userId },
        });
    });

    useEffect(() => {
        if (currentUser._id) doLastActivity(currentUser._id);
    }, [currentUser]);

    return children({ loading, error, data });
};

LastActivityQuery.propTypes = {
    children: PropTypes.any,
};
