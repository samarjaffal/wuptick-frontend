import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import dayjs from 'dayjs';
import 'react-datepicker/dist/react-datepicker.css';
import {
    DeadLineOption,
    SetDate,
    Deadline,
    ClearDate,
    ClearIcon,
    NoDateText,
} from './styles';

export const DeadLinePicker = ({ task = {}, saveDate }) => {
    const [startDate, setStartDate] = useState(new Date(task.deadline));
    const [hasDate, setHasDate] = useState(Boolean(task.deadline));

    const formatDate = (_date) => {
        let dateFormated = dayjs(_date).format('MMM D, YY');
        return dateFormated;
    };

    const dateOnChange = (date) => {
        setStartDate(date);
        setHasDate(true);
        let dateFormated = dayjs(date).format('MM-DD-YYYY');
        saveDate(task._id, dateFormated.toString());
    };

    const clearDate = () => {
        setHasDate(false);
        setStartDate(null);
        saveDate(task._id, null);
    };

    const DateInput = forwardRef(({ value, onClick }, ref) => (
        <>
            <Deadline className="date-input-custom-input" onClick={onClick}>
                {formatDate(value)}
            </Deadline>
            <ClearDate onClick={() => clearDate()}>
                <ClearIcon icon="times" />
            </ClearDate>
        </>
    ));

    const SetDateInput = forwardRef(({ value, onClick }, ref) => (
        <SetDate className="set-date-custom-input" onClick={onClick}>
            <NoDateText>Set Date</NoDateText>
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
                    customInput={<DateInput />}
                />
            ) : (
                <DatePicker
                    selected={null}
                    closeOnScroll={true}
                    onChange={(date) => dateOnChange(date)}
                    customInput={<SetDateInput />}
                />
            )}
        </DeadLineOption>
    );
};

DeadLinePicker.propTypes = {
    task: PropTypes.object,
    saveDate: PropTypes.func,
};
