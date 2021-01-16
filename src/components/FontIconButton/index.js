import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, Icon } from './styles';

export const FontIconButton = ({ iconName, doOnCLick }) => {
    return (
        <ButtonContainer onClick={() => doOnCLick()}>
            <Icon icon={iconName} />
        </ButtonContainer>
    );
};

FontIconButton.propTypes = {
    doOnCLick: PropTypes.func,
    iconName: PropTypes.string,
};
