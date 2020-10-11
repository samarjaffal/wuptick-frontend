import React from 'react';
import { Status as StatusStyled } from './styles';
import PropTypes from 'prop-types';

export const Status = ({ background, children }) => {
    return (
        <StatusStyled background={background}>
            <span>{children}</span>
        </StatusStyled>
    );
};

Status.propTypes = {
    children: PropTypes.any,
    bg: PropTypes.string,
};
