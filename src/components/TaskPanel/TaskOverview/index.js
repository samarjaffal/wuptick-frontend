import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { Avatar } from '../../Avatar/index';
import { TaskPanelOptionButtons } from '../TaskPanelOptionButtons/index';
import { FontIconButton } from '../../FontIconButton/index';
import { Editor } from '../../Editor/index';
import { FlexCenter } from '../../SharedComponents/styles';
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

export const TaskOverview = ({ task }) => {
    const [isEditing, setEditing] = useState(false);

    const formatDate = (_date) => {
        let dateFormated = dayjs(_date).format('MMM. D h:mm A');
        return dateFormated;
    };

    const toggleEditing = () => {
        setEditing(!isEditing);
    };

    const handleEditorData = () => {
        const data = {
            blocks: [
                {
                    type: 'paragraph',
                    data: {
                        text:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    },
                },
            ],
        };
        return data;
    };

    return (
        <TaskContainer>
            <div className="AvatarContainer">
                <Avatar size={30} src={task.owner.avatar} />
            </div>
            <TaskDetails>
                <FlexCenter>
                    <TaskName>{task.name}</TaskName>
                    {!isEditing && (
                        <FontIconButton
                            doOnCLick={toggleEditing}
                            iconName="edit"
                        />
                    )}
                </FlexCenter>

                <div className="TaskDescriptionContainer">
                    <div>
                        {isEditing ? (
                            <Editor
                                data={handleEditorData()}
                                setEditing={setEditing}
                            />
                        ) : (
                            <>
                                <TaskDescription>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                </TaskDescription>
                                <TaskInfo>
                                    <TaskOwner to="#">
                                        {' '}
                                        {task.owner.name} {task.owner.last_name}
                                    </TaskOwner>
                                    <Dot icon="circle" />
                                    <TaskCreatedDate>
                                        {task.created_at !== null
                                            ? formatDate(task.created_at)
                                            : ''}
                                    </TaskCreatedDate>
                                </TaskInfo>
                            </>
                        )}
                    </div>
                </div>
                <TaskPanelOptionButtons />
            </TaskDetails>
        </TaskContainer>
    );
};

TaskOverview.propTypes = {
    task: PropTypes.object,
};
