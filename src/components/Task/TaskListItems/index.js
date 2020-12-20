import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { TaskItem } from '../TaskItem';
import { Ul } from '../../SharedComponents/styles';

export const TaskListItems = ({ tasks = [] }) => {
    return tasks.map((task, index) => (
        <TaskItem task={task} key={task._id} index={index} />
    ));
};

TaskListItems.propTypes = {};
