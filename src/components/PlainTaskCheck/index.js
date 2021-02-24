import React, { useState, useEffect, useCallback } from 'react';
import { Colors } from '../../assets/css/colors';
import { PlainCheckIcon, TaskCheckStyled } from './styles';
import PropTypes from 'prop-types';

export const PlainTaskCheck = ({ task, saveStatus, isParentHover = false }) => {
    const [checked, setChecked] = useState(Boolean(task.done));

    useEffect(() => {
        console.log('render PlainTaskCheck');
    }, [task.done]);

    const handleSaveStatus = useCallback((status) => {
        setChecked(status);
        const checkbox = document.getElementById(`plain-${task._id}`);
        if (status) {
            checkbox.style.animationName = 'beat';
            checkbox.style.animationDuration = '1000ms';
        } else {
            checkbox.style.animationName = 'none';
            checkbox.style.animationDuration = '0';
        }
        if (saveStatus) {
            saveStatus(task._id, { done: status });
        }
    }, []);

    return (
        <TaskCheckStyled
            onClick={() => handleSaveStatus(!checked)}
            id={`plain-${task._id}`}
        >
            <PlainCheckIcon
                icon="check"
                color={
                    isParentHover
                        ? Colors.secondary
                        : checked
                        ? Colors.green
                        : Colors.secondary
                }
            />
        </TaskCheckStyled>
    );
};

PlainTaskCheck.propTypes = {
    task: PropTypes.object,
    saveStatus: PropTypes.func,
    isParentHover: PropTypes.bool,
};
