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
    NoTaskDescription,
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
                        text: task.description,
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
                                {task.description !== null &&
                                task.description !== '' ? (
                                    <TaskDescription>
                                        {task.description}
                                    </TaskDescription>
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
