import React from 'react';
import PropTypes from 'prop-types';
import { ListContainer } from '../ListContainer/index';
import { RadioButton } from '../RadioButton/index';
import { FlexSpaceBetween, Div } from '../SharedComponents/styles';
import { Name } from './styles';
export const LabeledRadioButton = ({
    label,
    value,
    color,
    currentChecked,
    changeValue,
}) => {
    return (
        <Div customProps="margin-right:1em;">
            <ListContainer>
                <FlexSpaceBetween>
                    <Name>{label}</Name>
                    <RadioButton
                        color={color}
                        value={value}
                        currentChecked={currentChecked}
                        changeValue={changeValue}
                    />
                </FlexSpaceBetween>
            </ListContainer>
        </Div>
    );
};

LabeledRadioButton.propTypes = {
    label: PropTypes.string,
    color: PropTypes.string,
    value: PropTypes.any,
    currentChecked: PropTypes.any,
    changeValue: PropTypes.func,
};
