import React from 'react';
import PropTypes from 'prop-types';
import { TaskItem } from '../TaskItem';
import { Ul } from '../../SharedComponents/styles';

export const TaskListItems = ({ tasks = [] }) => {
    return (
        <div className="TaskListItems">
            <Ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <TaskItem task={task} />
                    </li>
                ))}
            </Ul>
        </div>
    );
};

TaskListItems.propTypes = {};
