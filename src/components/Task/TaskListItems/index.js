import React from 'react';
import PropTypes from 'prop-types';
import { UpdateTaskMutation } from '../../../requests/Task/UpdateTaskMutation';
import { TaskItem } from '../TaskItem';

const MemoTaskListItems = ({ tasks = [] }) => {
    return (
        <UpdateTaskMutation>
            {({ doUpdateTask }) =>
                tasks.map((task, index) => (
                    <TaskItem
                        task={task}
                        key={task._id}
                        index={index}
                        doUpdate={doUpdateTask}
                    />
                ))
            }
        </UpdateTaskMutation>
    );
};

function areEqual(prevProps, nextProps) {
    return prevProps.tasks === nextProps.tasks;
}

export const TaskListItems = React.memo(MemoTaskListItems, areEqual);

MemoTaskListItems.propTypes = {
    tasks: PropTypes.array,
};
