import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RadioButton as RadioButtonStyled } from './styles';
export const RadioButton = ({ color, currentChecked, changeValue }) => {
    const [checked, SetChecked] = useState(false);

    useEffect(() => {
        if (currentChecked == color) {
            SetChecked(true);
        } else {
            SetChecked(false);
        }
    }, [currentChecked]);

    return (
        <RadioButtonStyled
            checked={checked}
            color={color}
            onClick={() => changeValue(color)}
        />
    );
};

RadioButton.propTypes = {
    color: PropTypes.string,
    currentChecked: PropTypes.string,
    changeValue: PropTypes.func,
};
