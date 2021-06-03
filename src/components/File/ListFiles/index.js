import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { DropdownContextProvider } from '../../../context/DropdownContext';
import { FileItem } from '../FileItem/index';
import { NoData } from '../../NoData/index';
import { List, Li } from './styles';

export const ListFiles = ({ files }) => {
    const dropdownRef = useRef(null);

    const isDeleted = (file) => file.deleted_at !== null;

    return files.length > 0 ? (
        <DropdownContextProvider>
            <List>
                {files.map(
                    (file, index) =>
                        !isDeleted(file) && (
                            <Li key={index}>
                                <FileItem
                                    file={file}
                                    index={index + 1}
                                    dropdownRef={dropdownRef}
                                />
                            </Li>
                        )
                )}
            </List>
        </DropdownContextProvider>
    ) : (
        <NoData message="You don't have any files here 👀." />
    );
};

ListFiles.propTypes = {
    files: PropTypes.array,
};
