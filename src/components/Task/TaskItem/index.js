import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { TaskCheck } from '../TaskCheck/index';
import { FavoriteButton } from '../../FavoriteButton/index';
import { AssignedUser } from '../../AssignedUser/index';
import { ListUsersDropdown } from '../../../pages/Module/ModuleDropDowns/index';
import {
    Task as TaskStyled,
    TaskText,
    TaskOptions,
    OptionContainer,
    AsigneeOption,
    SetDate,
    CenterContent,
    TextContainer,
    DragDropContainer,
    IconDragDrop,
} from './styles';

export const TaskItem = ({ task = {}, index, isDragging }) => {
    console.log('rendered task');

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
                                <TaskCheck />
                                <TaskText>{task.name}</TaskText>
                            </TextContainer>

                            <TaskOptions isDragging={snapshot.isDragging}>
                                <OptionContainer>
                                    <AsigneeOption>
                                        <AssignedUser task={task} />
                                    </AsigneeOption>
                                </OptionContainer>
                                <OptionContainer>
                                    <CenterContent>
                                        <div className="DeadLineOption">
                                            <SetDate>Set Date</SetDate>
                                        </div>
                                    </CenterContent>
                                </OptionContainer>
                                <OptionContainer>
                                    <CenterContent>
                                        <FavoriteButton />
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
};
