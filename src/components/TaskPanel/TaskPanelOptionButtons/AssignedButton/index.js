import React from 'react';
import PropTypes from 'prop-types';
import { MinimalButton } from '../../../MinimalButton/index';
import { Avatar } from '../../../Avatar/index';
import { Colors } from '../../../../assets/css/colors';

export const AssignedButton = () => {
    return (
        <MinimalButton
            color={Colors.blue}
            hover={Colors.backgroud}
            name="Jhon D."
        >
            {() => <Avatar size={22} />}
        </MinimalButton>
    );
};

AssignedButton.propTypes = {};
