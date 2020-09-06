import React from 'react';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';

export const MediumSkeleton = () => {
    return <Skeleton height={20} width={'100%'} />;
};

export const LightSkeleton = ({ width = '100%', margin = '0' }) => {
    return (
        <div style={{ margin: `${margin}` }}>
            <Skeleton height={10} width={width} />
        </div>
    );
};

LightSkeleton.propTypes = {
    width: PropTypes.string,
    margin: PropTypes.string,
};
