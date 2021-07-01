import React, { useState, useRef, useEffect, useCallback } from 'react';
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

const MemoTaskItem = ({
    task = {},
    index,
    doUpdate,
    moduleId,
    openTaskPanel,
}) => {
    console.log('rendered task');
    const [isEditing, setEditing] = useState(false);
    const [callOpenPanel, setCallOpenPanel] = useState(false);
    const inputRef = useRef(null);

    let clickCount = 0,
        timeout = 300;

    const toggleEditing = (value) => {
        setEditing(value);
        if (value) {
            inputRef.current.focus();
        }
    };

    const escFunction = () => {
        setEditing(false);
    };

    const handleClicks = useCallback(() => {
        clickCount++;
        if (clickCount == 1) {
            setTimeout(function () {
                if (clickCount == 1 && !isEditing) {
                    /*  openTaskPanel(task); */
                    setCallOpenPanel(true);
                } else {
                    toggleEditing(true);
                }
                clickCount = 0;
            }, timeout || 300);
        }
    }, [isEditing]);

    useEffect(() => {
        let taskItem = document.querySelector(`#task-item-${task._id}`);
        taskItem.addEventListener('keydown', handleKeys, false);
        taskItem.addEventListener('click', handleClicks);

        return () => {
            taskItem.removeEventListener('click', handleClicks);
            taskItem.removeEventListener('keydown', handleKeys, false);
        };
    }, [isEditing]);


    useEffect(() => {
        if (callOpenPanel) {
            openTaskPanel(task);
            setCallOpenPanel(false);
            return;
        }
    }, [callOpenPanel])

    const handleKeys = useCallback(
        (event) => {
            const { key, keyCode } = event;
            if (keyCode === 27) {
                escFunction();
            }
            if (keyCode === 13) {
                if (isEditing) {
                    const taskId = task._id;
                    let input = {
                        name: inputRef.current.value,
                    };
                    doUpdate(taskId, input, moduleId);
                    toggleEditing(false);
                }
            }
        },
        [isEditing]
    );
    return (
        <>
            <Draggable draggableId={task._id} index={index}>
                {(provided, snapshot) => (
                    <div
                        className="TaskContainer"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                    >
                        <TaskStyled isDragging={snapshot.isDragging}>
                            <DragDropContainer {...provided.dragHandleProps}>
                                <IconDragDrop icon="grip-horizontal" />
                            </DragDropContainer>
                            <TextContainer>
                                <HandleTaskStatusMutation moduleId={moduleId}>
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
                                        <TaskText id={`task-item-${task._id}`}>
                                            {task.name}
                                        </TaskText>
                                    ) : (
                                        <Input
                                            type="text"
                                            defaultValue={task.name}
                                            ref={inputRef}
                                            customProps="margin-left:10px;"
                                            id={`task-item-${task._id}`}
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
                                                    data !== null &&
                                                        typeof data !== 'undefined'
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

MemoTaskItem.propTypes = {
    task: PropTypes.object,
    index: PropTypes.number,
    moduleId: PropTypes.string,
    doUpdate: PropTypes.func,
    openTaskPanel: PropTypes.func,
};

function areEqual(prevProps, nextProps) {
    return (
        prevProps.task === nextProps.task && prevProps.index == nextProps.index
    );
}

export const TaskItem = React.memo(MemoTaskItem, areEqual);
