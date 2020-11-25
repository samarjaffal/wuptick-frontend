import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { Status } from '../../Status/index';
import { UpdateModuleStatusMutation } from '../../../requests/Module/UpdateModuleStatusMutation';
import { Container, ModuleContainer, Module, Name, Input } from './styles';

export const ModuleItem = ({
    index,
    module,
    setModuleCallback,
    editModuleId,
    setEditModuleId,
}) => {
    const [isEditing, setEditing] = useState(false);
    const [isFocused, SetFocus] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isEditing) {
            inputRef.current.focus();
        }
        document.addEventListener('keydown', handleKeys, false);
        SetFocus(inputRef.current !== document.activeElement);

        if (editModuleId && module._id == editModuleId) {
            setEditing(true);
            console.log('input and focus');
        }
        return () => {
            document.removeEventListener('keydown', handleKeys, false);
        };
    }, [isEditing, editModuleId]);

    const toggleEditing = () => {
        setEditing(true);
    };

    const handleKeys = (event) => {
        if (event.keyCode === 27) {
            escFunction();
        }

        if (event.keyCode === 13) {
            if (isFocused) {
                console.log('enter pressed');
                /*  setValue(inputRef.current.value); */
                /* inputRef.current.value = ''; */
                /*                if (doFunction) {
                    doFunction();
                } */
                setEditing(false);
            }
        }
    };

    const escFunction = () => {
        setEditing(false);
        setEditModuleId(null);
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
                                <Name to="">{module.name}</Name>
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
                                        toggleEditing={toggleEditing}
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
};
