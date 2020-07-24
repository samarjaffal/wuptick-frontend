import React from 'react';
import { Span } from './styles';
import PropTypes from 'prop-types';

export const ClickableText = ({ text, children }) => {
    return (
        <Span>
            {text}
            {children}
        </Span>
    );
};

ClickableText.propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.node,
};
