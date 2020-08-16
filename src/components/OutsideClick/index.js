import React, { useRef } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import PropTypes from 'prop-types';

export const OutsideClick = (props) => {
    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef);
    return <div ref={wrapperRef}>{props.children}</div>;
};

OutsideClick.propTypes = {
    children: PropTypes.element.isRequired,
};
