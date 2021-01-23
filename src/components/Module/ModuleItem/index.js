import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { Status } from '../../Status/index';
import { UpdateModuleStatusMutation } from '../../../requests/Module/UpdateModuleStatusMutation';
import { Container, ModuleContainer, Module, Name, Input } from './styles';

export const ModuleItem = ({
    index,
    module,
    projectId,
    setModuleCallback,
    editModuleId,
    setEditModuleId,
    doUpdateModule,
}) => {
    const [isEditing, setEditing] = useState(false);
    const [isFocused, SetFocus] = useState(false);
    const inputRef = useRef(null);

    const isCurrentElement = () => module._id == editModuleId;

    useEffect(() => {
        if (isEditing) {
            inputRef.current.focus();
        }
        document.addEventListener('keydown', handleKeys, false);
        SetFocus(inputRef.current !== document.activeElement);

        if (editModuleId && isCurrentElement() && !isEditing) {
            setEditing(true);
            console.log('set editing');
        }

        return () => {
            document.removeEventListener('keydown', handleKeys, false);
        };
    }, [isEditing, editModuleId]);

    const toggleEditing = (value) => {
        setEditing(value);
    };

    const handleKeys = (event) => {
        if (event.keyCode === 27) {
            escFunction();
        }

        if (event.keyCode === 13) {
            if (isFocused && isCurrentElement()) {
                if (doUpdateModule) {
                    let input = {
                        moduleId: module._id,
                        input: {
                            name: inputRef.current.value,
                        },
                    };
                    doUpdateModule(input);
                }
                escFunction();
            }
        }
    };

    const escFunction = () => {
        setEditModuleId(null);
        setEditing(false);
    };

    return (
        <Draggable draggableId={module._id} index={index}>
            {(provided) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <Module isEditing={isEditing}>
                        <ModuleContainer>
                            {!isEditing ? (
                                <Name
                                    to={`/project/${projectId}/module/${module._id}`}
                                >
                                    {module.name}
                                </Name>
                            ) : (
                                <Input
                                    type="text"
                                    defaultValue={module.name}
                                    ref={inputRef}
                                />
                            )}

                            <UpdateModuleStatusMutation>
                                {({ doUpdateModule }) => (
                                    <Status
                                        status={module.status}
                                        doUpdate={doUpdateModule}
                                        elemId={module._id}
                                        setModuleCallback={setModuleCallback}
                                    />
                                )}
                            </UpdateModuleStatusMutation>
                        </ModuleContainer>
                    </Module>
                </Container>
            )}
        </Draggable>
    );
};

ModuleItem.propTypes = {
    index: PropTypes.number,
    module: PropTypes.object,
    setModuleCallback: PropTypes.func,
    editModuleId: PropTypes.string,
    setEditModuleId: PropTypes.func,
    doUpdateModule: PropTypes.func,
};
