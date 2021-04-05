import React, { useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useUser } from '../../../hooks/useUser';
import { TaskListItems } from '../TaskListItems';
import { OptionsButtonList } from '../OptionsButtonList/index';
import { CreateTaskMutation } from '../../../requests/Task/CreateTaskMutation';
import { AddNew } from '../../AddNew/index';
import { FlexCenter, Input } from '../../SharedComponents/styles';
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
    doEditList,
}) => {
    const [isEditing, setEditing] = useState(false);
    let newTask = {};
    const inputRef = useRef(null);

    const toggleEditing = (index, value) => {
        itemsRef.current[index].setEditing(value);
    };

    const callBackNewTask = (value) => {
        newTask.name = value;
    };

    const isFirstColumn = () => Boolean(columnKey == 0);

    const handleKeys = useCallback(
        (event) => {
            const { keyCode } = event;
            if (keyCode === 27) {
                escFunction();
            }

            if (keyCode === 13) {
                if (isEditing) {
                    const listId = list._id;
                    const name = inputRef.current.value;
                    doEditList(moduleId, listId, name);
                    toggleEditing(columnKey, false);
                }
            }
        },
        [isEditing]
    );

    useEffect(() => {
        if (isEditing) {
            inputRef.current.focus();
        }
        let listElem = document.querySelector(`#list-${list._id}`);
        listElem.addEventListener('keydown', handleKeys, false);

        return () => {
            listElem.removeEventListener('keydown', handleKeys, false);
        };
    }, [isEditing]);

    const escFunction = () => {
        setEditing(false);
    };

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
                            (itemsRef.current[columnKey] = {
                                el,
                                setEditing,
                                inputRef,
                            })
                        }
                    >
                        <FlexCenter
                            isDragging={snapshot.isDragging}
                            {...provided.dragHandleProps}
                        >
                            {!isEditing ? (
                                <TaskListTitle id={`list-${list._id}`}>
                                    {list.name}
                                </TaskListTitle>
                            ) : (
                                <Input
                                    type="text"
                                    defaultValue={list.name}
                                    ref={inputRef}
                                    customProps="margin-left:10px;"
                                    id={`list-${list._id}`}
                                />
                            )}
                            <OptionButtonContainer>
                                <OptionsButtonList
                                    list={list}
                                    dropdownRef={dropdownRef}
                                    index={columnKey}
                                    editList={toggleEditing}
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
