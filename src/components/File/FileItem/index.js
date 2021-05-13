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
    FileContainer,
    Circle,
    FileIcon,
} from './styles';

export const FileItem = ({ dropdownRef, file, index, type = 'task' }) => {
    const [fileLinkName, setFileLinkName] = useState('');
    const [fileName, setFileName] = useState(file.fileName);
    const [fileParentUrl, setFileParentUrl] = useState(`/${file.parentUrl}`);
    const [fileType, setFileType] = useState(file.fileName);
    const { getTaskFromLists, lists } = useTask();

    const NO_URL = '?tab=files';

    const formatDate = (_date) => {
        let dateFormated = dayjs(_date).format('MMM. D, YYYY h:mm A');
        return dateFormated;
    };

    const fileParams = JSON.parse(file.additional_params);

    const checkFileType = () => {
        const type = 'type' in fileParams ? fileParams.type : 'image';
        setFileType(type);
    };

    const getTaskValues = () => {
        const taskId = 'taskId' in fileParams ? fileParams.taskId : null;
        const task = taskId ? getTaskFromLists(lists, taskId) : null;
        const fileLinkName = task == null ? 'N/A' : task.name;
        const updatedFileParentUrl = task == null ? NO_URL : fileParentUrl;
        setFileParentUrl(updatedFileParentUrl);
        setFileLinkName(fileLinkName);
        checkFileType();
    };

    const checkParent = () => {
        switch (type) {
            case 'task':
                return getTaskValues();

            case 'module':
                return null;
        }
    };

    useEffect(() => {
        checkParent();
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
            <FileLink to={fileParentUrl}>{fileLinkName}</FileLink>
            <div>
                <a href={file.fileUrl} target="_blank" rel="noreferrer">
                    {fileType === 'image' ? (
                        <FileImg src={file.fileUrl} alt="File 1" />
                    ) : (
                        <FileContainer>
                            <Circle>
                                <FileIcon icon={['far', 'file-alt']} />
                            </Circle>
                        </FileContainer>
                    )}
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
