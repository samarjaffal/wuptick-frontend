import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { OptionsButtonFile } from '../OptionsButtonFile/index';
import { DeleteFileMutation } from '../../../requests/Files/DeleteFileMutation';
import { useTask } from '../../../hooks/useTask';
import { Avatar } from '../../Avatar/index';
import {
    Container,
    AvatarContainer,
    DetailsContainer,
    Flex,
    FileName,
    Date,
    FileLink,
    FileImg,
} from './styles';

export const FileItem = ({ dropdownRef, file, index, type = 'task' }) => {
    const [fileLinkName, setFileLinkName] = useState('');
    const [fileName, setFileName] = useState(file.fileName);
    const { getTaskFromLists, lists } = useTask();

    const formatDate = (_date) => {
        let dateFormated = dayjs(_date).format('MMM. D, YYYY h:mm A');
        return dateFormated;
    };

    const fileParams = JSON.parse(file.additional_params);

    const getTaskValues = () => {
        const taskId = 'taskId' in fileParams ? fileParams.taskId : null;
        const task = taskId ? getTaskFromLists(lists, taskId) : null;
        const fileLinkName = task == null ? '' : task.name;
        setFileLinkName(fileLinkName);
    };

    const checkFileType = () => {
        switch (type) {
            case 'task':
                return getTaskValues();

            case 'module':
                return null;
        }
    };

    useEffect(() => {
        checkFileType();
    }, []);

    return (
        <Container>
            <Flex>
                <FileName>{fileName || `File ${index}`}</FileName>
                <AvatarContainer>
                    <Avatar
                        size={22}
                        user={file.owner}
                        src={file.owner.avatar}
                    />
                </AvatarContainer>
                <DeleteFileMutation id={file.parentId}>
                    {({ doDeleteFile, loading }) => (
                        <OptionsButtonFile
                            file={file}
                            dropdownRef={dropdownRef}
                            doDeleteFile={doDeleteFile}
                            loadingDelete={loading}
                        />
                    )}
                </DeleteFileMutation>
            </Flex>
            <FileLink to={`/${file.parentUrl}`}>{fileLinkName}</FileLink>
            <div>
                <a href={file.fileUrl} target="_blank" rel="noreferrer">
                    <FileImg src={file.fileUrl} alt="File 1" />
                </a>
            </div>
            <DetailsContainer>
                <Date>{formatDate(file.created_at)}</Date>
            </DetailsContainer>
        </Container>
    );
};

FileItem.propTypes = {
    file: PropTypes.object,
    index: PropTypes.number,
    type: PropTypes.string,
};
