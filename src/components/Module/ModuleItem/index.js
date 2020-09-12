import React from 'react';
import { Link } from '@reach/router';
import { ListContainer } from '../../ListContainer';
import { ModuleContainer, Name, Status } from './styles';
export const ModuleItem = () => {
    return (
        <ListContainer>
            <ModuleContainer>
                <Name to="/">Fronted</Name>
                <Status>Active</Status>
            </ModuleContainer>
        </ListContainer>
    );
};
