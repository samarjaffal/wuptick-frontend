import React from 'react';
import PropTypes from 'prop-types';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useDragDrop } from '../../../hooks/useDragDrop';
import { TaskListItems } from '../TaskListItems';
import { AddNew } from '../../AddNew/index';
import {
    TaskList as TaskListStyled,
    TaskListHeader,
    TaskListTitle,
    ColumnHeader,
    ColumnName,
    TaskListColumns,
    Placeholder,
} from './styles';

export const TaskList = ({
    list = {},
    columnKey,
    columnId,
    placeholderProps,
}) => {
    return (
        <Draggable draggableId={`${columnId}-${columnKey}`} index={columnKey}>
            {(provided) => (
                <TaskListStyled
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                    <TaskListHeader>
                        <TaskListTitle {...provided.dragHandleProps}>
                            {list.name}
                        </TaskListTitle>
                        <TaskListColumns>
                            <ColumnHeader>
                                <ColumnName>Asignee</ColumnName>
                            </ColumnHeader>
                            <ColumnHeader>
                                <ColumnName>Deadline</ColumnName>
                            </ColumnHeader>
                            <ColumnHeader>
                                <ColumnName>Favorite</ColumnName>
                            </ColumnHeader>
                        </TaskListColumns>
                    </TaskListHeader>
                    <Droppable
                        droppableId={columnId}
                        key={columnKey}
                        type="task"
                    >
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{ position: 'relative' }}
                            >
                                <TaskListItems tasks={list.tasks} />
                                {provided.placeholder}
                                {/*   {Object.keys(placeholderProps).length !== 0 &&
                                    snapshot.isDraggingOver && (
                                        <Placeholder
                                            top={placeholderProps.clientY}
                                            left={placeholderProps.clientX}
                                            height={
                                                placeholderProps.clientHeight
                                            }
                                            width={placeholderProps.clientWidth}
                                            isDragging={snapshot.isDraggingOver}
                                        />
                                    )} */}
                            </div>
                        )}
                    </Droppable>
                    <AddNew
                        text="Add Task"
                        icon={true}
                        border={false}
                        bgColor="transparent"
                    />
                </TaskListStyled>
            )}
        </Draggable>
    );
};

TaskList.propTypes = {};
