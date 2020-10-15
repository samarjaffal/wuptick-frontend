import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { ModuleItem } from '../ModuleItem';
import { AddNew } from '../../AddNew/index';
import { SaveModulesOrderMutation } from '../../../requests/Module/SaveModulesOrderMutation';
import { useDragDrop } from '../../../hooks/useDragDrop';
import { List, Placeholder } from './styles';
export const ListModules = ({ modules = [], projectId }) => {
    const _columns = ['modules'];
    const _items = [...modules];

    return (
        <SaveModulesOrderMutation>
            {({ doSaveOrder }) => {
                const onDragEndCallBack = (arrayIds) => {
                    console.log('onDragEndCallBack', arrayIds, projectId);
                    doSaveOrder(arrayIds, projectId);
                };
                const {
                    columns,
                    items,
                    onDragEnd,
                    placeholderProps,
                    handleDragUpdate,
                } = useDragDrop(_columns, _items, () => onDragEndCallBack);
                return (
                    <DragDropContext
                        onDragEnd={onDragEnd}
                        onDragUpdate={handleDragUpdate}
                    >
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
                                                {Object.keys(placeholderProps)
                                                    .length !== 0 &&
                                                    snapshot.isDraggingOver && (
                                                        <Placeholder
                                                            top={
                                                                placeholderProps.clientY
                                                            }
                                                            left={
                                                                placeholderProps.clientX
                                                            }
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
            }}
        </SaveModulesOrderMutation>
    );
};
