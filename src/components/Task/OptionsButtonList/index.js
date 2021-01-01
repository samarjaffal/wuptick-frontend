import React, { useRef } from 'react';
import { OptionsButton } from '../../OptionsButton/index';
import { useDropdown } from '../../../hooks/useDropdown';
import { useTask } from '../../../hooks/useTask';
import PropTypes from 'prop-types';

export const OptionsButtonList = ({ list }) => {
    const {
        setRef,
        setPositionDropDown,
        openDropCallBack,
        setSelectedDropDownCB,
    } = useDropdown();
    const { setElemType, setCurrentList } = useTask();
    let optionsRef = useRef();

    const handleDropDown = (value = null) => {
        value = value == null ? true : value;
        setSelectedDropDownCB('list');
        openDropCallBack(value);
        if (value) {
            setRef(optionsRef);
            setPositionDropDown(optionsRef);
            setElemType('list');
            setCurrentList(list);
        }
    };

    return <OptionsButton doFunc={handleDropDown} elemRef={optionsRef} />;
};

OptionsButtonList.propTypes = {
    list: PropTypes.object,
};
