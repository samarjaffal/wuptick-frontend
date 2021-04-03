import React from 'react';
import PropTypes from 'prop-types';
import { SkeletonAvatar } from '../SkeletonAvatar';
import { Ul } from '../../SharedComponents/styles';
import { Li } from './styles';

export const SkeletonMembers = ({ quantity = 1, size = 25 }) => {
    return (
        <Ul customProps="display:flex">
            {Array(quantity)
                .fill()
                .map((item, index) => (
                    <Li key={index}>
                        <SkeletonAvatar size={size} />
                    </Li>
                ))}
        </Ul>
    );
};

SkeletonMembers.propTypes = {};
