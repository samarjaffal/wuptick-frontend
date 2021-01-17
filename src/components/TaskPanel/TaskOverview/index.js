import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import parse from 'html-react-parser';
import { Avatar } from '../../Avatar/index';
import { TaskPanelOptionButtons } from '../TaskPanelOptionButtons/index';
import { FontIconButton } from '../../FontIconButton/index';
import { Editor } from '../../Editor/index';
import { FlexCenter, Input } from '../../SharedComponents/styles';
import { Colors } from '../../../assets/css/colors';
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

export const TaskOverview = ({
    task,
    module,
    doUpdateTask,
    newTaskData,
    setCurrentTask,
}) => {
    const [isEditing, setEditing] = useState(false);
    let inputRef = useRef(null);
    let descriptionRef = useRef(null);

    useEffect(() => {
        if (typeof newTaskData !== 'undefined' && newTaskData !== null) {
            setCurrentTask(newTaskData.editTask);
        }
    }, [newTaskData]);

    const formatDate = (_date) => {
        let dateFormated = dayjs(_date).format('MMM. D h:mm A');
        return dateFormated;
    };

    const toggleEditing = () => {
        setEditing(!isEditing);
    };

    const onSave = async (outputHtml, outputData) => {
        let outputDataStr = JSON.stringify({ blocks: outputData.blocks });
        let input = {
            name: inputRef.current.value,
            description: outputHtml,
            descriptionJson: outputDataStr,
        };
        setEditing(false);
        await doUpdateTask(task._id, input, module._id);
    };

    return (
        <TaskContainer>
            <div className="AvatarContainer">
                <Avatar size={30} src={task.owner.avatar} />
            </div>
            <TaskDetails>
                <FlexCenter>
                    {isEditing ? (
                        <Input
                            type="text"
                            defaultValue={task.name}
                            ref={inputRef}
                            customProps={`border: 1px solid ${Colors.backgroud};border-radius: 8px; padding: 1em;`}
                        />
                    ) : (
                        <>
                            <TaskName>{task.name}</TaskName>
                            <FontIconButton
                                doOnCLick={toggleEditing}
                                iconName="edit"
                            />
                        </>
                    )}
                </FlexCenter>

                <div className="TaskDescriptionContainer">
                    <div ref={descriptionRef}>
                        {isEditing ? (
                            <Editor
                                initData={
                                    task.descriptionJson !== null
                                        ? JSON.parse(task.descriptionJson)
                                        : null
                                }
                                onSave={onSave}
                                setEditing={setEditing}
                            />
                        ) : (
                            <>
                                {task.description !== null &&
                                task.description !== '' ? (
                                    <TaskDescription>
                                        {parse(task.description)}
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
    module: PropTypes.object,
    newTaskData: PropTypes.object,
    doUpdateTask: PropTypes.func,
    setCurrentTask: PropTypes.func,
};
