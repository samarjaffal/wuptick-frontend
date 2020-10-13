import React from 'react';
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
} from './styles';

export const FileItem = () => {
    return (
        <Container>
            <Flex>
                <Image size={80} />
                <AvatarContainer>
                    <Avatar size={22} />
                </AvatarContainer>
                <InfoContainer>
                    <FileName>File_name.jpg</FileName>
                    <Origin>Task 1</Origin>
                </InfoContainer>
            </Flex>
            <DetailsContainer>
                <Date>06/10/2020 - </Date>
                <Size>12Mb</Size>
            </DetailsContainer>
        </Container>
    );
};
