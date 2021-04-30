import React from 'react';
import PropTypes from 'prop-types';
import { FileItem } from '../FileItem/index';
import { List } from './styles';

export const ListFiles = ({ files }) => {
    return (
        <List>
            {files.map((file, index) => (
                <li key={index}>
                    <FileItem file={file} />
                </li>
            ))}
        </List>
    );
};

ListFiles.propTypes = {
    files: PropTypes.array,
};
