import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LabeledRadioButton } from '../LabeledRadioButton/index';
import { Colors } from '../../assets/css/colors';

export const PrivacyRadioButtons = ({ getPrivacyCallBack }) => {
    const [privacy] = useState(['Private', 'Team']);
    const [currentChecked, setCurrentChecked] = useState('Team');

    const changeValue = (value) => {
        setCurrentChecked(value);
        getPrivacyCallBack(value);
    };

    return privacy.map((name, index) => (
        <LabeledRadioButton
            key={index}
            changeValue={changeValue}
            color={Colors.secondary}
            currentChecked={currentChecked}
            label={name}
            value={name}
        />
    ));
};

PrivacyRadioButtons.propTypes = {};
