import React from 'react';
import { ListContainer } from '../../ListContainer';
import { Status } from '../../Status/index';
import { ModuleContainer, Name } from './styles';

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
