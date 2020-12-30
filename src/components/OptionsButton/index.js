import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Colors } from '../../assets/css/colors';
import { OptionsButton as OptionsButtonStyled } from './styles';

export const OptionsButton = ({ elemRef, doFunc }) => {
    return (
        <OptionsButtonStyled ref={elemRef} onClick={() => doFunc()}>
            <FontAwesomeIcon icon="ellipsis-h" color={Colors.gray} />
        </OptionsButtonStyled>
    );
};

OptionsButton.propTypes = {};
