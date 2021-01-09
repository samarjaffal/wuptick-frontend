import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '../../Avatar/index';
import { TaskPanelOptionButtons } from '../TaskPanelOptionButtons/index';
import {
    TaskContainer,
    TaskDetails,
    TaskName,
    TaskDescription,
    TaskOwner,
    TaskCreatedDate,
    TaskInfo,
    Dot,
} from './styles';

export const TaskOverview = () => {
    return (
        <TaskContainer>
            <div className="AvatarContainer">
                <Avatar size={30} />
            </div>
            <TaskDetails>
                <TaskName>Create a Home Page</TaskName>
                <div className="TaskDescriptionContainer">
                    <TaskDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                    </TaskDescription>
                    <TaskInfo>
                        <TaskOwner to="#">Samar Jaffal</TaskOwner>
                        <Dot icon="circle" />
                        <TaskCreatedDate>Oct. 06 4:00pm</TaskCreatedDate>
                    </TaskInfo>
                </div>
                <TaskPanelOptionButtons />
            </TaskDetails>
        </TaskContainer>
    );
};

TaskOverview.propTypes = {};
