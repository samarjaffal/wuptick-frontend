import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { TaskItem } from '../TaskItem';
import { Ul } from '../../SharedComponents/styles';

export const TaskListItems = ({
    originalTasks = [],
    newTasks,
    setNewTasks,
}) => {
    useEffect(() => {
        setNewTasks(originalTasks);
    }, []);

    return newTasks.map((task, index) => (
        <TaskItem task={task} key={task._id} index={index} />
    ));
};

TaskListItems.propTypes = {};
