import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Ul } from '../SharedComponents/styles';
import { RadioButton } from '../RadioButton/index';
import { Colors } from '../../assets/css/colors';
import { Li } from './styles';

const colors = [
    Colors.blue,
    Colors.green,
    Colors.red,
    Colors.orange,
    Colors.yellow,
    Colors.primary,
    Colors.secondary,
];

export const ColorPicker = ({ getColorSelected, defaultValue = null }) => {
    const [currentChecked, setCurrentChecked] = useState(Colors.primary);

    useEffect(() => {
        if (defaultValue !== null) {
            changeValue(defaultValue);
        }
    }, []);

    const changeValue = (value) => {
        setCurrentChecked(value);
        getColorSelected(value);
    };

    return (
        <Ul customProps="display:flex; flex-wrap:wrap;">
            {colors.map((color, index) => (
                <Li key={index}>
                    <RadioButton
                        color={color}
                        value={color}
                        currentChecked={currentChecked}
                        changeValue={changeValue}
                    />
                </Li>
            ))}
        </Ul>
    );
};

ColorPicker.propTypes = {
    getColorSelected: PropTypes.func,
    defaultValue: PropTypes.string,
};
