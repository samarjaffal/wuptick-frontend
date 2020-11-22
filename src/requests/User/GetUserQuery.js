import React from 'react';
import { useCallback, useEffect } from 'react';
import { useLazyQuery } from 'react-apollo';
import { gqlGetUser } from '../graphql/gqlGetUser';
import PropTypes from 'prop-types';

export const GetUserQuery = ({
    children,
    userId,
    loader: Loader,
    loaderProps,
}) => {
    const [getUser, { error, loading, data }] = useLazyQuery(gqlGetUser, {
        fetchPolicy: 'cache-and-network',
        onCompleted: (data) => {
            console.log(data, 'data GetUserQuery');
        },
    });

    const doGetUser = useCallback(() => {
        getUser({
            variables: { userId },
        });
    });

    useEffect(() => {
        if (userId) doGetUser();
    }, [userId]);

    if (loading) {
        if (Loader) return <Loader {...loaderProps} />;
        return 'loading...';
    }

    if (!data) return 'no data';

    if (error) {
        console.log(error, 'error');
    }
    return children({ loading, error, data });
};

GetUserQuery.propTypes = {
    children: PropTypes.any,
};
