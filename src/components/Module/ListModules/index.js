import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { ModuleItem } from '../ModuleItem';
import { ListModuleItems } from '../ListModuleItems';
import { AddNew } from '../../AddNew/index';
import { OptionsDropDown as StatusDropDown } from '../../Status/index';
import { useDragDrop } from '../../../hooks/useDragDrop';
import { useDropdown } from '../../../hooks/useDropdown';
import { OutsideClick } from '../../OutsideClick/index';
import { CreateModuleMutation } from '../../../requests/Module/CreateModuleMutation';
import { DeleteModuleMutation } from '../../../requests/Module/DeleteModuleMutation';
import { SaveModulesOrderMutation } from '../../../requests/Module/SaveModulesOrderMutation';
import { UpdateModuleNameMutation } from '../../../requests/Module/UpdateModuleNameMutation';
import { List, Placeholder } from './styles';

export const ListModules = ({ modules = [], projectId }) => {
    /*  const [columns, setColumns] = useState(['modules-column']); */
    const [selectedModule, setSelectedModule] = useState();
    const [editModuleId, setEditModuleId] = useState(null);
    const { currentElemRef, openDropCallBack } = useDropdown();

    let _columns = [{ _id: 'modules_column_1', modules: [...modules] }];

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

    const editModuleIdCallBack = (id) => {
        setEditModuleId(id);
    };

    const handleDropDown = (value = null) => {
        value = value == null ? true : value;
        openDropCallBack(value);
    };

    return (
        <SaveModulesOrderMutation>
            {({ doSaveOrder }) => {
                const onDragEndCallBack = (items) => {
                    const moduleIds = items.map((item) => item._id);
                    console.log('onDragEndCallBack', moduleIds, projectId);
                    doSaveOrder(moduleIds, projectId);
                };
                const {
                    columns,
                    handleDragUpdate,
                    onDragEnd,
                    placeholderProps,
                } = useDragDrop(
                    _columns,
                    'modules',
                    false,
                    () => onDragEndCallBack
                );
                return (
                    <DragDropContext
                        onDragEnd={onDragEnd}
                        onDragUpdate={handleDragUpdate}
                    >
                        <div className="Container" style={{ fontSize: '14px' }}>
                            {columns.length > 0 && (
                                <UpdateModuleNameMutation>
                                    {({ doUpdateModule }) =>
                                        columns.map((column, index) => (
                                            <Droppable
                                                droppableId={column._id}
                                                key={index}
                                            >
                                                {(provided, snapshot) => (
                                                    <List
                                                        {...provided.droppableProps}
                                                        ref={provided.innerRef}
                                                    >
                                                        <ListModuleItems
                                                            modules={
                                                                column.modules
                                                            }
                                                            projectId={
                                                                projectId
                                                            }
                                                            doUpdateModule={
                                                                doUpdateModule
                                                            }
                                                            setModuleCallback={
                                                                setModuleCallback
                                                            }
                                                            editModuleId={
                                                                editModuleId
                                                            }
                                                            setEditModuleId={
                                                                setEditModuleId
                                                            }
                                                        />
                                                        {provided.placeholder}
                                                        {Object.keys(
                                                            placeholderProps
                                                        ).length !== 0 &&
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
                                                            {({
                                                                doCreateModule,
                                                            }) => {
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
                                                                        border={
                                                                            true
                                                                        }
                                                                    />
                                                                );
                                                            }}
                                                        </CreateModuleMutation>
                                                    </List>
                                                )}
                                            </Droppable>
                                        ))
                                    }
                                </UpdateModuleNameMutation>
                            )}

                            {ReactDom.createPortal(
                                <OutsideClick
                                    setLocalDropDownState={handleDropDown}
                                >
                                    <DeleteModuleMutation>
                                        {({ doDeleteModule }) => (
                                            <StatusDropDown
                                                setStatus={setStatus}
                                                moduleId={selectedModule}
                                                doDeleteModule={doDeleteModule}
                                                editModuleIdCallBack={
                                                    editModuleIdCallBack
                                                }
                                            />
                                        )}
                                    </DeleteModuleMutation>
                                </OutsideClick>,
                                document.getElementById('dropwdown-app')
                            )}
                        </div>
                    </DragDropContext>
                );
            }}
        </SaveModulesOrderMutation>
    );
};

ListModules.propTypes = {
    modules: PropTypes.array,
    projectId: PropTypes.string,
};
