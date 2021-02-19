import React from 'react';
import PropTypes from 'prop-types';
import { MinimalButton } from '../../../MinimalButton/index';
import { Colors } from '../../../../assets/css/colors';
import { TagIconSVG } from './styles';

export const TagButton = () => {
    return (
        <MinimalButton
            color={Colors.primary}
            name="Web"
            hover={Colors.backgroud}
        >
            {(isParentHover) => (
                <TagIconSVG
                    width="18px"
                    height="18px"
                    viewBox="0 0 25 25"
                    color={isParentHover ? Colors.primary : Colors.primary}
                />
            )}
        </MinimalButton>
    );
};

TagButton.propTypes = {};
