import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { LabeledRadioButton } from '../LabeledRadioButton/index';
import { setFirstLetterUpperCase } from '../../shared/functions';
import { Colors } from '../../assets/css/colors';

export const PrivacyRadioButtons = ({ getPrivacyCallBack }) => {
    const [privacy] = useState(['private', 'team']);
    const [currentChecked, setCurrentChecked] = useState('team');

    useEffect(() => {
        getPrivacyCallBack('team');
    }, []);

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
            label={setFirstLetterUpperCase(name)}
            value={name}
        />
    ));
};

PrivacyRadioButtons.propTypes = {};
