import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MinimalButton } from '../../../MinimalButton/index';
import { Colors } from '../../../../assets/css/colors';

export const ChangeListButton = () => {
    return (
        <div className="ChangeListButton">
            <MinimalButton color={Colors.primary} name="To do">
                {() => <FontAwesomeIcon icon="tasks" color={Colors.primary} />}
            </MinimalButton>
        </div>
    );
};

ChangeListButton.propTypes = {};
