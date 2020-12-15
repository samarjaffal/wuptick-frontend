import React from 'react';
import PropTypes from 'prop-types';
import { TaskItem } from '../TaskItem';
import { Ul } from '../../SharedComponents/styles';

export const TaskListItems = () => {
    return (
        <div className="TaskListItems">
            <Ul>
                {Array(4)
                    .fill()
                    .map((item, index) => (
                        <li key={index}>
                            <TaskItem />
                        </li>
                    ))}
            </Ul>
        </div>
    );
};

TaskListItems.propTypes = {};
