import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Colors } from '../../../assets/css/colors';
import {
    TaskCheck as TaskCheckStyled,
    Square,
    SquareHover,
    SquareChecked,
} from './styles';

const MemoTaskCheck = ({ task, saveStatus }) => {
    const [checked, setChecked] = useState(Boolean(task.done));

    useEffect(() => {
        console.log('render TaskCheck');
        setChecked(Boolean(task.done));
    }, [task.done]);

    /* console.log('render TaskCheck'); */
    const handleSaveStatus = useCallback((status) => {
        setChecked(status);
        const checkbox = document.getElementById(`check-${task._id}`);
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

MemoTaskCheck.propTypes = {
    task: PropTypes.object,
    saveStatus: PropTypes.func,
};

function areEqual(prevProps, nextProps) {
    return prevProps.task.done === nextProps.task.done;
}

export const TaskCheck = React.memo(MemoTaskCheck, areEqual);
