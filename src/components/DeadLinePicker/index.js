import React from 'react';
import PropTypes from 'prop-types';
import { SetDate, Date } from './styles';

export const DeadLinePicker = ({ task = {} }) => {
    return (
        <div className="DeadLineOption">
            {task.deadline ? (
                <Date>{task.deadline}</Date>
            ) : (
                <SetDate>Set Date</SetDate>
            )}
        </div>
    );
};

DeadLinePicker.propTypes = {
    task: PropTypes.object,
};
