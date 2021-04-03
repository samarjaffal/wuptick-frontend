import React from 'react';
import Skeleton from 'react-loading-skeleton';

export const SkeletonAvatar = ({ size = 25 }) => {
    return <Skeleton circle={true} width={size} height={size} />;
};
