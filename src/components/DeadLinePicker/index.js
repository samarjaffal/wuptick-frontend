import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {
    DeadLineOption,
    SetDate,
    Deadline,
    ClearDate,
    ClearIcon,
} from './styles';

export const DeadLinePicker = ({ task = {} }) => {
    const [startDate, setStartDate] = useState(new Date(task.deadline));
    const [hasDate, setHasDate] = useState(Boolean(task.deadline));

    const dateOnChange = (date) => {
        setStartDate(date);
        setHasDate(true);
    };

    const clearDate = () => {
        setHasDate(false);
        setStartDate(null);
    };

    const DateInput = forwardRef(({ value, onClick }, ref) => (
        <>
            <Deadline className="date-input-custom-input" onClick={onClick}>
                {value}
            </Deadline>
            <ClearDate onClick={() => clearDate()}>
                <ClearIcon icon="times" />
            </ClearDate>
        </>
    ));

    const SetDateInput = forwardRef(({ value, onClick }, ref) => (
        <SetDate className="set-date-custom-input" onClick={onClick}>
            Set Date
        </SetDate>
    ));

    DateInput.displayName = 'DateInput';
    SetDateInput.displayName = 'SetDateInput';

    return (
        <DeadLineOption>
            {hasDate ? (
                <DatePicker
                    selected={startDate}
                    closeOnScroll={true}
                    onChange={(date) => dateOnChange(date)}
                    dateFormat="dd/MM/yyyy"
                    customInput={<DateInput />}
                />
            ) : (
                <DatePicker
                    selected={null}
                    closeOnScroll={true}
                    onChange={(date) => dateOnChange(date)}
                    dateFormat="dd/MM/yyyy"
                    customInput={<SetDateInput />}
                />
            )}
        </DeadLineOption>
    );
};

DeadLinePicker.propTypes = {
    task: PropTypes.object,
};
