import React from 'react';
import PropTypes from 'prop-types';
import { MinimalButton } from '../../../MinimalButton/index';
import { Colors } from '../../../../assets/css/colors';
import { Icon } from './styles';

export const HeaderDeleteButton = () => {
    return (
        <MinimalButton color={Colors.red} size={35} bg={Colors.whitePrimary}>
            {(isParentHover) => (
                <Icon
                    icon={['far', 'trash-alt']}
                    color={isParentHover ? Colors.red : Colors.red}
                />
            )}
        </MinimalButton>
    );
};

HeaderDeleteButton.propTypes = {};
