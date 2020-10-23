import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { Status } from '../../Status/index';
import { UpdateModuleStatusMutation } from '../../../requests/Module/UpdateModuleStatusMutation';
import { Container, ModuleContainer, Module, Name } from './styles';

export const ModuleItem = ({ index, module }) => {
    return (
        <Draggable draggableId={module._id} index={index}>
            {(provided) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <Module>
                        <ModuleContainer>
                            <Name to="/">{module.name}</Name>
                            <UpdateModuleStatusMutation>
                                {({ doUpdateModule }) => (
                                    <Status
                                        status={module.status}
                                        doUpdate={doUpdateModule}
                                        elemId={module._id}
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
