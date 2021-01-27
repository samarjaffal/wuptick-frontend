import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { OptionsButton } from '../../OptionsButton/index';
import { useDropdown } from '../../../hooks/useDropdown';

export const OptionsButtonReplies = ({ dropdownRef }) => {
    const { handleDropDown } = useDropdown();

    let optionsRef = useRef();

    const openDropdown = (value = null) => {
        handleDropDown(value, dropdownRef, optionsRef);
    };

    return <OptionsButton doFunc={openDropdown} elemRef={optionsRef} />;
};

OptionsButtonReplies.propTypes = {
    dropdownRef: PropTypes.any,
};
