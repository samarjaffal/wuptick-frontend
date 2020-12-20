import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
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

export const TaskList = ({ list = {} }) => {
    const columns = ['tasks'];
    const _items = [...list.tasks];

    const onDragEndCallBack = () => {
        console.log('onDragEndCallBack');
    };
    const {
        items,
        setItems,
        onDragEnd,
        placeholderProps,
        handleDragUpdate,
    } = useDragDrop(_items, onDragEndCallBack);

    return (
        <TaskListStyled>
            <TaskListHeader>
                <TaskListTitle>{list.name}</TaskListTitle>
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
            <DragDropContext
                onDragEnd={onDragEnd}
                onDragUpdate={handleDragUpdate}
            >
                {columns.length > 0 &&
                    columns.map((column, index) => (
                        <Droppable
                            droppableId={`${list._id}-${column}`}
                            key={index}
                        >
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    style={{ position: 'relative' }}
                                >
                                    <TaskListItems
                                        originalTasks={_items}
                                        newTasks={items}
                                        setNewTasks={setItems}
                                    />
                                    {provided.placeholder}
                                    {Object.keys(placeholderProps).length !==
                                        0 &&
                                        snapshot.isDraggingOver && (
                                            <Placeholder
                                                top={placeholderProps.clientY}
                                                left={placeholderProps.clientX}
                                                height={
                                                    placeholderProps.clientHeight
                                                }
                                                width={
                                                    placeholderProps.clientWidth
                                                }
                                                isDragging={
                                                    snapshot.isDraggingOver
                                                }
                                            />
                                        )}
                                </div>
                            )}
                        </Droppable>
                    ))}
                <AddNew
                    text="Add Task"
                    icon={true}
                    border={false}
                    bgColor="transparent"
                />
            </DragDropContext>
        </TaskListStyled>
    );
};

TaskList.propTypes = {};
