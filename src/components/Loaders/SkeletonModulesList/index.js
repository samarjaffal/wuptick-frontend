import React from 'react';
import PropTypes from 'prop-types';
import { Ul } from '../../SharedComponents/styles';
import { SkeletonStyled } from './styles';

export const SkeletonModulesList = ({ quantity }) => {
    return (
        <div className="ModulesList">
            <Ul>
                {Array(quantity)
                    .fill()
                    .map((item, index) => (
                        <li key={index} style={{ marginBottom: '1em' }}>
                            <SkeletonStyled w="100%" height={44} />
                        </li>
                    ))}
            </Ul>
        </div>
    );
};

SkeletonModulesList.propTypes = {};
