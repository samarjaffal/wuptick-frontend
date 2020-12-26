import React from 'react';
import PropTypes from 'prop-types';
import { TaskItem } from '../TaskItem';

const MemoTaskListItems = ({ tasks = [] }) => {
    return tasks.map((task, index) => (
        <TaskItem task={task} key={task._id} index={index} />
    ));
};

function areEqual(prevProps, nextProps) {
    return prevProps.tasks === nextProps.tasks;
}

export const TaskListItems = React.memo(MemoTaskListItems, areEqual);

MemoTaskListItems.propTypes = {
    tasks: PropTypes.array,
};
