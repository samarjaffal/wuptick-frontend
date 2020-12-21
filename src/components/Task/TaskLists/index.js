import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDragDrop } from '../../../hooks/useDragDrop';
import { TaskList } from '../TaskList';
import { Ul } from '../../SharedComponents/styles';
import { Li } from './styles';

export const TaskLists = ({ lists = [] }) => {
    let _columns = lists;
    const { columns, onDragEnd, handleDragUpdate } = useDragDrop(
        _columns,
        'tasks'
    );
    return (
        <DragDropContext onDragEnd={onDragEnd} onDragUpdate={handleDragUpdate}>
            <div className="Container">
                {columns.map((list, index) => (
                    <TaskList
                        list={list}
                        key={index}
                        columnKey={index}
                        columnId={`${list._id}`}
                    />
                ))}
            </div>
        </DragDropContext>
    );
};

TaskLists.propTypes = {};
