import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { ModuleItem } from '../ModuleItem';
import { AddNew } from '../../AddNew/index';
import { List } from './styles';
export const ListModules = () => {
    const onDragEnd = (result) => {};
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="Container" style={{ fontSize: '14px' }}>
                <Droppable droppableId="1">
                    {(provided) => (
                        <List
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {Array(4)
                                .fill()
                                .map((item, index) => (
                                    <li key={index}>
                                        <ModuleItem index={index} id={index} />
                                    </li>
                                ))}
                            {provided.placeholder}
                            <AddNew text="Add new module" />
                        </List>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    );
};
