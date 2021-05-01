import React from 'react';
import PropTypes from 'prop-types';
import { FileItem } from '../FileItem/index';
import { NoData } from '../../NoData/index';
import { List } from './styles';

export const ListFiles = ({ files }) => {
    return files.length > 0 ? (
        <List>
            {files.map((file, index) => (
                <li key={index}>
                    <FileItem file={file} index={index + 1} />
                </li>
            ))}
        </List>
    ) : (
        <NoData message="You don't have any files here 👀." />
    );
};

ListFiles.propTypes = {
    files: PropTypes.array,
};
