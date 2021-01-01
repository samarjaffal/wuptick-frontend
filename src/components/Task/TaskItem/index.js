import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { TaskCheck } from '../TaskCheck/index';
import { FavoriteButton } from '../../FavoriteButton/index';
import { AssignedUser } from '../../AssignedUser/index';
import { DeadLinePicker } from '../../DeadLinePicker/index';
import { OptionsButtonTask } from '../OptionsButtonTask/index';
import { MeQuery } from '../../../requests/MeQuery';
import { AddDeadlineToTaskMutation } from '../../../requests/Task/AddDeadlineToTaskMutation';
import { HandleTaskStatusMutation } from '../../../requests/Task/HandleTaskStatusMutation';
import { Input } from '../../SharedComponents/styles';
import {
    Task as TaskStyled,
    TaskText,
    TaskOptions,
    OptionContainer,
    AsigneeOption,
    CenterContent,
    TextContainer,
    DragDropContainer,
    OptionButtonContainer,
    IconDragDrop,
} from './styles';

export const TaskItem = ({ task = {}, index, doUpdate, moduleId }) => {
    console.log('rendered task');
    const [isEditing, setEditing] = useState(false);
    const inputRef = useRef(null);

    const toggleEditing = (value) => {
        setEditing(value);
        if (value) {
            inputRef.current.focus();
        }
    };

    const escFunction = () => {
        setEditing(false);
    };

    useEffect(() => {
        let taskItem = document.querySelector(`#task-item-${task._id}`);
        taskItem.addEventListener('keydown', handleKeys, false);
        taskItem.addEventListener('dblclick', () => toggleEditing(true));

        return () => {
            taskItem.removeEventListener('dblclick', () => toggleEditing(true));
            taskItem.removeEventListener('keydown', handleKeys, false);
        };
    }, [isEditing]);

    const handleKeys = (event) => {
        if (event.keyCode === 27) {
            escFunction();
        }
        if (event.keyCode === 13) {
            if (isEditing) {
                const taskId = task._id;
                let input = {
                    name: inputRef.current.value,
                };
                doUpdate(taskId, input, moduleId);
                toggleEditing(false);
            }
        }
    };
    return (
        <>
            <Draggable draggableId={task._id} index={index}>
                {(provided, snapshot) => (
                    <div
                        className="TaskContainer"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                    >
                        <TaskStyled
                            isDragging={snapshot.isDragging}
                            id={`task-item-${task._id}`}
                        >
                            <DragDropContainer {...provided.dragHandleProps}>
                                <IconDragDrop icon="grip-horizontal" />
                            </DragDropContainer>
                            <TextContainer>
                                <HandleTaskStatusMutation>
                                    {({ doHandleStatus }) => (
                                        <TaskCheck
                                            task={task}
                                            saveStatus={doHandleStatus}
                                        />
                                    )}
                                </HandleTaskStatusMutation>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '100%',
                                    }}
                                >
                                    {!isEditing ? (
                                        <TaskText>{task.name}</TaskText>
                                    ) : (
                                        <Input
                                            type="text"
                                            defaultValue={task.name}
                                            ref={inputRef}
                                            customProps="margin-left:10px;"
                                        />
                                    )}
                                    <OptionButtonContainer>
                                        <OptionsButtonTask task={task} />
                                    </OptionButtonContainer>
                                </div>
                            </TextContainer>

                            <TaskOptions isDragging={snapshot.isDragging}>
                                <OptionContainer>
                                    <AsigneeOption>
                                        <AssignedUser task={task} />
                                    </AsigneeOption>
                                </OptionContainer>
                                <OptionContainer>
                                    <CenterContent>
                                        <AddDeadlineToTaskMutation>
                                            {({ doAddDeadline }) => (
                                                <DeadLinePicker
                                                    task={task}
                                                    saveDate={doAddDeadline}
                                                />
                                            )}
                                        </AddDeadlineToTaskMutation>
                                    </CenterContent>
                                </OptionContainer>
                                <OptionContainer>
                                    <CenterContent>
                                        <MeQuery>
                                            {({ data }) => {
                                                const favTasks =
                                                    data !== null
                                                        ? data.me.favorite_tasks
                                                        : [];
                                                return (
                                                    <FavoriteButton
                                                        taskId={task._id}
                                                        favTasks={favTasks}
                                                    />
                                                );
                                            }}
                                        </MeQuery>
                                    </CenterContent>
                                </OptionContainer>
                            </TaskOptions>
                        </TaskStyled>
                    </div>
                )}
            </Draggable>
        </>
    );
};

TaskItem.propTypes = {
    task: PropTypes.object,
    index: PropTypes.number,
    moduleId: PropTypes.string,
    doUpdate: PropTypes.func,
};
