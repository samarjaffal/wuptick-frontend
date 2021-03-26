import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import parse from 'html-react-parser';
import { Avatar } from '../../Avatar/index';
import { TaskPanelOptionButtons } from '../TaskPanelOptionButtons/index';
import { FontIconButton } from '../../FontIconButton/index';
import { Editor } from '../../Editor/index';
import { TaskDescriptionStyle } from '../../../assets/css/TaskDescriptionStyle';
import { useUser } from '../../../hooks/useUser';
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
    currentProject,
}) => {
    const [isEditing, setEditing] = useState(false);
    const { generateTaskUrl } = useUser();
    let inputRef = useRef(null);
    let descriptionRef = useRef(null);
    let mentionsItems = currentProject.members
        ? currentProject.members.map((member) => {
              return {
                  id: member.user._id,
                  name: member.user.name,
                  lastName: member.user.last_name,
              };
          })
        : [];

    useEffect(() => {}, [task]);

    const formatDate = (_date) => {
        let dateFormated = dayjs(_date).format('MMM. D YYYY h:mm A');
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
        let url = generateTaskUrl(currentProject._id, module._id, task._id);
        await doUpdateTask(task._id, input, module._id, url);
    };

    return (
        <TaskContainer>
            <TaskDescriptionStyle />
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

                <div
                    className="TaskDescriptionContainer"
                    style={{ marginTop: '1em' }}
                >
                    <div ref={descriptionRef}>
                        {isEditing ? (
                            <Editor
                                initData={
                                    Object.keys(task.descriptionJson).length > 0
                                        ? JSON.parse(task.descriptionJson)
                                        : null
                                }
                                onSave={onSave}
                                setEditing={setEditing}
                                mentionItems={mentionsItems}
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
                <TaskPanelOptionButtons task={task} module={module} />
            </TaskDetails>
        </TaskContainer>
    );
};

TaskOverview.propTypes = {
    task: PropTypes.object,
    module: PropTypes.object,
    doUpdateTask: PropTypes.func,
    currentProject: PropTypes.object,
};
