import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    TaskCheck as TaskCheckStyled,
    Square,
    SquareHover,
    SquareChecked,
} from './styles';

export const TaskCheck = ({ task, saveStatus }) => {
    const [checked, setChecked] = useState(Boolean(task.done));

    const handleSaveStatus = (status) => {
        setChecked(status);
        const checkbox = document.getElementById(`check-${task._id}`);
        if (status) {
            checkbox.style.animationName = 'beat';
            checkbox.style.animationDuration = '1000ms';
        } else {
            checkbox.style.animationName = 'none';
            checkbox.style.animationDuration = '0';
        }
        saveStatus(task._id, { done: status });
    };

    return (
        <TaskCheckStyled
            onClick={() => handleSaveStatus(!checked)}
            id={`check-${task._id}`}
        >
            {checked ? (
                <SquareChecked icon={['fas', 'check-square']} />
            ) : (
                <>
                    <Square icon={['far', 'square']} />
                    <SquareHover icon={['far', 'check-square']} />
                </>
            )}
        </TaskCheckStyled>
    );
};

TaskCheck.propTypes = {
    task: PropTypes.object,
    saveStatus: PropTypes.func,
};
