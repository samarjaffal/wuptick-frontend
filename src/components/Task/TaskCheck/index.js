import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    TaskCheck as TaskCheckStyled,
    Square,
    SquareHover,
    SquareChecked,
} from './styles';

export const TaskCheck = () => {
    const [checked, setChecked] = useState(false);

    return (
        <TaskCheckStyled onClick={() => setChecked(!checked)}>
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

TaskCheck.propTypes = {};
