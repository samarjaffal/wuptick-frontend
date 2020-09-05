import React from 'react';
import { LastActivityQuery } from '../../requests/LastActivity';
import { FeedItem } from '../FeedItem/index';
import { SkeletonActivity } from '../Loaders/SkeletonActivity/index';
export const LastActivity = () => {
    const handleLogs = (logs) => {
        return logs.length > 0 ? (
            logs.map((log) => <FeedItem key={log._id} {...log} />)
        ) : (
            <div>You don&apos;t have any activities yet</div>
        );
    };

    return (
        <LastActivityQuery>
            {({ loading, error, data }) => {
                if (loading || !data) {
                    return <SkeletonActivity />;
                }
                if (error) {
                    console.error(error);
                }
                const { getLastActivity: logs } = data;

                return handleLogs(logs);
            }}
        </LastActivityQuery>
    );
};
