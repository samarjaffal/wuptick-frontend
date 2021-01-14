import React from 'react';
import PropTypes from 'prop-types';
import { UpdateTaskMutation } from '../../../requests/Task/UpdateTaskMutation';
import { TaskItem } from '../TaskItem';

const MemoTaskListItems = ({ tasks = [], moduleId, openTaskPanel }) => {
    return (
        <UpdateTaskMutation>
            {({ doUpdateTask }) =>
                tasks.length > 0 &&
                tasks.map(
                    (task, index) =>
                        task !== null && (
                            <TaskItem
                                task={task}
                                key={task._id}
                                index={index}
                                doUpdate={doUpdateTask}
                                moduleId={moduleId}
                                openTaskPanel={openTaskPanel}
                            />
                        )
                )
            }
        </UpdateTaskMutation>
    );
};

function areEqual(prevProps, nextProps) {
    return (
        prevProps.tasks === nextProps.tasks &&
        prevProps.moduleId == nextProps.moduleId
    );
}

export const TaskListItems = React.memo(MemoTaskListItems, areEqual);

MemoTaskListItems.propTypes = {
    tasks: PropTypes.array,
    moduleId: PropTypes.string,
    openTaskPanel: PropTypes.func,
};
