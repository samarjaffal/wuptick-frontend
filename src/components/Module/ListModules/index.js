import React from 'react';
import { ModuleItem } from '../ModuleItem';
import { List } from './styles';
export const ListModules = () => {
    return (
        <List>
            {Array(4)
                .fill()
                .map((item, index) => (
                    <li key={index}>
                        <ModuleItem />
                    </li>
                ))}
        </List>
    );
};
