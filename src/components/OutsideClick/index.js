import React, { useRef } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import PropTypes from 'prop-types';

export const OutsideClick = ({ setLocalDropDownState, children }) => {
    const wrapperRef = useRef(null);
    useOutsideClick(setLocalDropDownState, wrapperRef);
    return <div ref={wrapperRef}>{children}</div>;
};

OutsideClick.propTypes = {
    children: PropTypes.element.isRequired,
    setLocalDropDownState: PropTypes.func,
};
