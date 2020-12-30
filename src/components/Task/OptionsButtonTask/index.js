import React, { useRef } from 'react';
import { OptionsButton } from '../../OptionsButton/index';
import { useDropdown } from '../../../hooks/useDropdown';
import { useUser } from '../../../hooks/useUser';
import PropTypes from 'prop-types';

export const OptionsButtonTask = ({ task }) => {
    const {
        setRef,
        setPositionDropDown,
        openDropCallBack,
        setSelectedDropDownCB,
    } = useDropdown();
    const { setCurrentTask } = useUser();

    let optionsRef = useRef();

    const handleDropDown = (value = null) => {
        value = value == null ? true : value;
        setSelectedDropDownCB('task-item');
        openDropCallBack(value);
        if (value) {
            setRef(optionsRef);
            setPositionDropDown(optionsRef);
            setCurrentTask(task);
        }
    };

    return <OptionsButton doFunc={handleDropDown} elemRef={optionsRef} />;
};

OptionsButtonTask.propTypes = {};
