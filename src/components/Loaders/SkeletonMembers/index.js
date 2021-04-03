import React from 'react';
import PropTypes from 'prop-types';
import { SkeletonAvatar } from '../SkeletonAvatar';
import { Ul } from '../../SharedComponents/styles';

export const SkeletonMembers = ({ quantity = 1 }) => {
    return (
        <Ul customProps="display:flex">
            {Array(quantity)
                .fill()
                .map((item, index) => (
                    <li key={index} style={{ marginLeft: '0.4em' }}>
                        <SkeletonAvatar />
                    </li>
                ))}
        </Ul>
    );
};

SkeletonMembers.propTypes = {};
