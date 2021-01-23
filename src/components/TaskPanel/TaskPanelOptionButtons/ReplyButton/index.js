import React from 'react';
import PropTypes from 'prop-types';
import { MinimalButton } from '../../../MinimalButton/index';
import { Colors } from '../../../../assets/css/colors';
import { ReplyIconSVG } from './styles';

export const ReplyButton = () => {
    return (
        <MinimalButton color={Colors.blue} name="Reply">
            {(isParentHover) => (
                <ReplyIconSVG
                    width="18px"
                    height="18px"
                    viewBox="0 0 25 25"
                    color={isParentHover ? Colors.whitePrimary : Colors.blue}
                />
            )}
        </MinimalButton>
    );
};

ReplyButton.propTypes = {};
