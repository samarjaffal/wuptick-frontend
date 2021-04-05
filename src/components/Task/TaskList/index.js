import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useUser } from '../../../hooks/useUser';
import { TaskListItems } from '../TaskListItems';
import { OptionsButtonList } from '../OptionsButtonList/index';
import { CreateTaskMutation } from '../../../requests/Task/CreateTaskMutation';
import { AddNew } from '../../AddNew/index';
import { FlexCenter } from '../../SharedComponents/styles';
import {
    TaskList as TaskListStyled,
    TaskListHeader,
    TaskListTitle,
    ColumnHeader,
    ColumnName,
    TaskListColumns,
    Placeholder,
    TaskListItemsContainer,
    AddNewContainer,
    OptionButtonContainer,
} from './styles';

const MemoTaskList = ({
    list = {},
    columnKey,
    columnId,
    moduleId,
    placeholderProps,
    openTaskPanel,
    itemsRef,
    dropdownRef,
}) => {
    const [isEditing, setEditing] = useState(false);
    let newTask = {};

    const toggleEditing = (index, value) => {
        itemsRef.current[index].setEditing(value);
    };

    const callBackNewTask = (value) => {
        newTask.name = value;
    };

    const isFirstColumn = () => Boolean(columnKey == 0);

    return (
        <Draggable draggableId={`${columnId}-${columnKey}`} index={columnKey}>
            {(provided, snapshot) => (
                <TaskListStyled
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    <TaskListHeader
                        ref={(el) =>
                            (itemsRef.current[columnKey] = { el, setEditing })
                        }
                    >
                        <FlexCenter>
                            <TaskListTitle
                                isDragging={snapshot.isDragging}
                                {...provided.dragHandleProps}
                            >
                                {list.name}
                            </TaskListTitle>
                            <OptionButtonContainer>
                                <OptionsButtonList
                                    list={list}
                                    dropdownRef={dropdownRef}
                                    index={columnKey}
                                />
                            </OptionButtonContainer>
                        </FlexCenter>

                        {isFirstColumn() && (
                            <TaskListColumns isDragging={snapshot.isDragging}>
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
                        )}
                    </TaskListHeader>
                    <Droppable
                        droppableId={columnId}
                        key={columnKey}
                        type="task"
                    >
                        {(provided) => (
                            <TaskListItemsContainer
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                isDragging={snapshot.isDragging}
                            >
                                <TaskListItems
                                    tasks={list.tasks}
                                    moduleId={moduleId}
                                    openTaskPanel={openTaskPanel}
                                />
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
                            </TaskListItemsContainer>
                        )}
                    </Droppable>
                    <AddNewContainer isDragging={snapshot.isDragging}>
                        <CreateTaskMutation>
                            {({ doAddTask }) => {
                                const createTask = () => {
                                    doAddTask(newTask, moduleId, list._id);
                                };

                                return (
                                    <AddNew
                                        text="Add Task"
                                        icon={true}
                                        border={false}
                                        bgColor="transparent"
                                        doFunction={createTask}
                                        setValue={callBackNewTask}
                                    />
                                );
                            }}
                        </CreateTaskMutation>
                    </AddNewContainer>
                </TaskListStyled>
            )}
        </Draggable>
    );
};

MemoTaskList.propTypes = {
    list: PropTypes.object,
    columnKey: PropTypes.number,
    columnId: PropTypes.string,
    placeholderProps: PropTypes.object,
    moduleId: PropTypes.string,
    openTaskPanel: PropTypes.func,
    itemsRef: PropTypes.object,
    dropdownRef: PropTypes.any,
};

function areEqual(prevProps, nextProps) {
    /*     console.log(prevProps.list === nextProps.list, 'comp'); */
    return prevProps.list === nextProps.list;
}

export const TaskList = React.memo(MemoTaskList, areEqual);
