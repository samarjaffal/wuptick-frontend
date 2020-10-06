import React from 'react';
import { ModuleItem } from '../ModuleItem';
import { AddNew } from '../../AddNew/index';
import { List } from './styles';
export const ListModules = () => {
    return (
        <div className="Container">
            <List>
                {Array(4)
                    .fill()
                    .map((item, index) => (
                        <li key={index}>
                            <ModuleItem />
                        </li>
                    ))}
                <AddNew text="Add new module" />
            </List>
        </div>
    );
};
