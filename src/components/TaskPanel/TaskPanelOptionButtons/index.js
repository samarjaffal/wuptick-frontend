import React from 'react';
import PropTypes from 'prop-types';
/* import { ReplyButton } from './ReplyButton'; */
import { TaskActionsContainer } from './styles';
import { AssignedButton } from './AssignedButton';
import { TagButton } from './TagButton/index';
import { ChangeListButton } from './ChangeListButton';
import { GetTagsQuery } from '../../../requests/Tag/GetTagsQuery';

export const TaskPanelOptionButtons = ({ task }) => {
    return (
        <TaskActionsContainer>
            {/*   <ReplyButton /> */}
            <AssignedButton assigned={task.assigned} />
            <GetTagsQuery>
                {({ data }) => {
                    let tags = data.getTags;
                    return <TagButton tag={task.tag} tags={tags || []} />;
                }}
            </GetTagsQuery>
            <ChangeListButton />
        </TaskActionsContainer>
    );
};

TaskPanelOptionButtons.propTypes = {
    task: PropTypes.object,
};
