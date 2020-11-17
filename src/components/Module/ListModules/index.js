import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { ModuleItem } from '../ModuleItem';
import { AddNew } from '../../AddNew/index';
import { OptionsDropDown as StatusDropDown } from '../../Status/index';
import { SaveModulesOrderMutation } from '../../../requests/Module/SaveModulesOrderMutation';
import { useDragDrop } from '../../../hooks/useDragDrop';
import { useDropdown } from '../../../hooks/useDropdown';
import { CreateModuleMutation } from '../../../requests/Module/CreateModuleMutation';
import { List, Placeholder } from './styles';
export const ListModules = ({ modules = [], projectId }) => {
    const [selectedModule, setSelectedModule] = useState();
    const { currentElemRef } = useDropdown();

    const _columns = ['modules'];
    const _items = [...modules];

    const setStatus = (value) => {
        currentElemRef.current.setStatus(value);
    };

    const setModuleCallback = (module) => {
        setSelectedModule(module);
    };

    const newModuleInput = {
        name: '',
        project: {
            _id: projectId,
        },
    };

    const SetModuleName = (value) => {
        newModuleInput.name = value;
    };

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
                                                            setModuleCallback={
                                                                setModuleCallback
                                                            }
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
                                                <CreateModuleMutation>
                                                    {({ doCreateModule }) => {
                                                        const addNewModule = () => {
                                                            doCreateModule(
                                                                newModuleInput
                                                            );
                                                        };
                                                        return (
                                                            <AddNew
                                                                text="Add new module"
                                                                doFunction={
                                                                    addNewModule
                                                                }
                                                                setValue={
                                                                    SetModuleName
                                                                }
                                                            />
                                                        );
                                                    }}
                                                </CreateModuleMutation>
                                            </List>
                                        )}
                                    </Droppable>
                                ))}

                            {ReactDom.createPortal(
                                <StatusDropDown
                                    setStatus={setStatus}
                                    moduleId={selectedModule}
                                />,
                                document.getElementById('dropwdown-app')
                            )}
                        </div>
                    </DragDropContext>
                );
            }}
        </SaveModulesOrderMutation>
    );
};
