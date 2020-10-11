import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { ModuleItem } from '../ModuleItem';
import { AddNew } from '../../AddNew/index';
import { useDragDrop } from '../../../hooks/useDragDrop';
import { List, Placeholder } from './styles';
export const ListModules = ({ modules = [] }) => {
    const _columns = ['modules'];
    const _items = [...modules];

    const {
        columns,
        items,
        onDragEnd,
        placeholderProps,
        handleDragUpdate,
    } = useDragDrop(_columns, _items);

    return (
        <DragDropContext onDragEnd={onDragEnd} onDragUpdate={handleDragUpdate}>
            <div className="Container" style={{ fontSize: '14px' }}>
                {columns.length > 0 &&
                    columns.map((column, index) => (
                        <Droppable droppableId={column} key={index}>
                            {(provided, snapshot) => (
                                <List
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {items.map((module, index) => (
                                        <li key={module._id}>
                                            <ModuleItem
                                                index={index}
                                                module={module}
                                            />
                                        </li>
                                    ))}
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

                                    <AddNew text="Add new module" />
                                </List>
                            )}
                        </Droppable>
                    ))}
            </div>
        </DragDropContext>
    );
};
