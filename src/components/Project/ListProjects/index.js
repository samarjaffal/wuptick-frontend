import React from 'react';
import { ProjectItem } from '../ProjectItem';
export const ListProjects = () => {
    return Array(6)
        .fill()
        .map((item, index) => <ProjectItem key={index} />);
};
