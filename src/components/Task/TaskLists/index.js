import React from 'react';
import PropTypes from 'prop-types';
import { TaskList } from '../TaskList';
import { Ul } from '../../SharedComponents/styles';

export const TaskLists = () => {
    return (
        <Ul>
            {Array(1)
                .fill()
                .map((item, index) => (
                    <li key={index}>
                        <TaskList />
                    </li>
                ))}
        </Ul>
    );
};

TaskLists.propTypes = {};
