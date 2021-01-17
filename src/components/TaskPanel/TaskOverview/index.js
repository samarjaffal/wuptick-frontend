import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { Avatar } from '../../Avatar/index';
import { TaskPanelOptionButtons } from '../TaskPanelOptionButtons/index';

import {
    TaskContainer,
    TaskDetails,
    TaskName,
    TaskDescription,
    NoTaskDescription,
    TaskOwner,
    TaskCreatedDate,
    TaskInfo,
    Dot,
} from './styles';

export const TaskOverview = ({ task }) => {
    const formatDate = (_date) => {
        let dateFormated = dayjs(_date).format('MMM. D h:mm A');
        return dateFormated;
    };

    console.log(task.description, 'task.description');
    return (
        <TaskContainer>
            <div className="AvatarContainer">
                <Avatar size={30} src={task.owner.avatar} />
            </div>
            <TaskDetails>
                <TaskName>{task.name}</TaskName>
                <div
                    className="TaskDescriptionContainer"
                    style={{ width: '100%' }}
                >
                    {task.description !== null && task.description !== '' ? (
                        <TaskDescription>{task.description}</TaskDescription>
                    ) : (
                        <NoTaskDescription>
                            Add a description to this task...
                        </NoTaskDescription>
                    )}
                    <TaskInfo>
                        <TaskOwner to="#">
                            {task.owner.name} {task.owner.last_name}
                        </TaskOwner>
                        <Dot icon="circle" />
                        <TaskCreatedDate>
                            {task.created_at !== null
                                ? formatDate(task.created_at)
                                : ''}
                        </TaskCreatedDate>
                    </TaskInfo>
                </div>
                <TaskPanelOptionButtons />
            </TaskDetails>
        </TaskContainer>
    );
};

TaskOverview.propTypes = {
    task: PropTypes.object,
};
