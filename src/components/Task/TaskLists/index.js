import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDragDrop } from '../../../hooks/useDragDrop';
import { TaskList } from '../TaskList';
import { SaveTaskListsOrderMutation } from '../../../requests/Module/SaveTaskListsOrderMutation';

export const TaskLists = ({ lists = [], moduleId, openTaskPanel }) => {
    let _columns = lists;
    const prevModuleRef = useRef();

    useEffect(() => {
        prevModuleRef.current = moduleId;
    }, [moduleId]);

    return (
        <SaveTaskListsOrderMutation>
            {({ doSaveOrder }) => {
                const onDragEndCallBack = (columns) => {
                    const taskLists = columns.map((list) => {
                        const newList = { ...list };
                        const tasksIds = list.tasks.map((task) => task._id);
                        newList.tasks = tasksIds;
                        return newList;
                    });

                    doSaveOrder(prevModuleRef.current, taskLists);
                };
                const {
                    columns,
                    onDragEnd,
                    handleDragUpdate,
                    placeholderProps,
                } = useDragDrop(
                    _columns,
                    'tasks',
                    true,
                    () => onDragEndCallBack
                );
                return (
                    <DragDropContext
                        onDragEnd={onDragEnd}
                        onDragUpdate={handleDragUpdate}
                    >
                        <Droppable
                            droppableId="all-columns"
                            direction="vertical"
                            type="column"
                        >
                            {(provided) => (
                                <div
                                    className="Container"
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {columns.map((list, index) => (
                                        <TaskList
                                            list={list}
                                            key={index}
                                            columnKey={index}
                                            columnId={`${list._id}`}
                                            placeholderProps={placeholderProps}
                                            moduleId={moduleId}
                                            openTaskPanel={openTaskPanel}
                                        />
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                );
            }}
        </SaveTaskListsOrderMutation>
    );
};

TaskLists.propTypes = {
    lists: PropTypes.array,
    moduleId: PropTypes.string,
    openTaskPanel: PropTypes.func,
};
