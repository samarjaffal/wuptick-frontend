import React, { useState, useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Label } from '../../Label/index';
import { OutsideClick } from '../../OutsideClick/index';
import { Colors } from '../../../assets/css/colors';

export const InvitationSelect = forwardRef(
    (
        {
            color,
            userId,
            setRef,
            setPositionCallBack,
            openDropCallBack,
            setUserCallBack,
        },
        ref
    ) => {
        const [label] = useState('Invitation Sent');
        const [openDropDown, setOpenDropDown] = useState(false);
        const selectRef = useRef(null);
        const labelRef = useRef(null);

        const handleDropDown = (value = null) => {
            value = value == null ? true : value;
            setOpenDropDown(value);
            openDropCallBack(value);
            if (value) {
                setRef(selectRef);
                setPositionCallBack(labelRef.current.getBoundingClientRect());
                setUserCallBack(userId);
            }
        };

        return (
            <div ref={selectRef}>
                <OutsideClick setLocalDropDownState={handleDropDown}>
                    <Label
                        name={label}
                        color={color}
                        showCaret={true}
                        width="max-content"
                        ref={labelRef}
                        pointer={true}
                        onClicked={handleDropDown}
                    />
                </OutsideClick>
            </div>
        );
    }
);

InvitationSelect.displayName = 'InvitationSelect';

InvitationSelect.propTypes = {
    userId: PropTypes.string,
    color: PropTypes.string,
    openDropCallBack: PropTypes.func,
    setPositionCallBack: PropTypes.func,
    setUserCallBack: PropTypes.func,
    setRef: PropTypes.func,
};
