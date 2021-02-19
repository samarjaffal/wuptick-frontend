import React from 'react';
import PropTypes from 'prop-types';
/* import { ReplyButton } from './ReplyButton'; */
import { TaskActionsContainer } from './styles';
import { AssignedButton } from './AssignedButton';
import { TagButton } from './TagButton/index';

export const TaskPanelOptionButtons = ({ task }) => {
    return (
        <TaskActionsContainer>
            {/*   <ReplyButton /> */}
            <AssignedButton assigned={task.assigned} />
            <TagButton />
        </TaskActionsContainer>
    );
};

TaskPanelOptionButtons.propTypes = {
    task: PropTypes.object,
};
