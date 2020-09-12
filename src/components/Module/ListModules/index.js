import React from 'react';
import { ModuleItem } from '../ModuleItem';
export const ListModules = () => {
    return Array(4)
        .fill()
        .map((item, index) => <ModuleItem key={index} />);
};
