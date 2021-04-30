import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { Image } from '../../Image/index';
import { Avatar } from '../../Avatar/index';
import {
    Container,
    InfoContainer,
    AvatarContainer,
    DetailsContainer,
    Flex,
    FileName,
    Origin,
    Date,
    Size,
    FileImg,
} from './styles';

export const FileItem = ({ file }) => {
    const formatDate = (_date) => {
        let dateFormated = dayjs(_date).format('MMM. D, YYYY h:mm A');
        return dateFormated;
    };

    return (
        <Container>
            <Flex>
                <FileName>File_name.jpg</FileName>
                <AvatarContainer>
                    <Avatar
                        size={22}
                        user={file.owner}
                        src={file.owner.avatar}
                    />
                </AvatarContainer>
            </Flex>
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
};
