import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ListContainer } from '../../ListContainer';
import { Status } from '../../Status/index';
import { Container, ModuleContainer, Name } from './styles';

export const ModuleItem = ({ index, module }) => {
    return (
        <Draggable draggableId={module._id} index={index}>
            {(provided) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <ListContainer margin="0">
                        <ModuleContainer>
                            <Name to="/">{module.name}</Name>
                            <Status>Active</Status>
                        </ModuleContainer>
                    </ListContainer>
                </Container>
            )}
        </Draggable>
    );
};
