import React from 'react';
import { FileItem } from '../FileItem/index';
import { List } from './styles';
export const ListFiles = () => {
    return (
        <List>
            {Array(6)
                .fill()
                .map((item, index) => (
                    <li key={index}>
                        <FileItem />
                    </li>
                ))}
        </List>
    );
};