import React, { useEffect, useState } from 'react';
import { MinimalButton } from '../../../MinimalButton/index';
import { PlainTaskCheck } from '../../../PlainTaskCheck/index';
import { HandleTaskStatusMutation } from '../../../../requests/Task/HandleTaskStatusMutation';
import { Colors } from '../../../../assets/css/colors';
import PropTypes from 'prop-types';

export const HeaderTaskCheck = ({ task, inactiveColor, activeColor }) => {
    const [checked, setChecked] = useState(Boolean(task.done));

    useEffect(() => {
        console.log('render HeaderTaskCheck');
    }, [checked]);

    const setCheckedCB = (value) => {
        setChecked(value);
    };

    return (
        <HandleTaskStatusMutation>
            {({ doHandleStatus }) => (
                <MinimalButton
                    color={checked ? Colors.white : Colors.white}
                    hover={checked ? activeColor : Colors.hover}
                    size={35}
                    bg={checked ? activeColor : inactiveColor}
                >
                    {(isParentHover) => (
                        <PlainTaskCheck
                            task={task}
                            isParentHover={isParentHover}
                            saveStatus={doHandleStatus}
                            inactiveColor={Colors.secondary}
                            activeColor={Colors.white}
                            setCheckedCB={setCheckedCB}
                        />
                    )}
                </MinimalButton>
            )}
        </HandleTaskStatusMutation>
    );
};

HeaderTaskCheck.propTypes = {};
