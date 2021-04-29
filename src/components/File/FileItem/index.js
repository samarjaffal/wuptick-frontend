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
    FileImg,
} from './styles';

export const FileItem = () => {
    return (
        <Container>
            <Flex>
                <FileName>File_name.jpg</FileName>
                <AvatarContainer>
                    <Avatar size={22} />
                </AvatarContainer>
                {/*  <InfoContainer>
                    <FileName>File_name.jpg</FileName>
                    <Origin>Task 1</Origin>
                </InfoContainer> */}
            </Flex>
            <div>
                <FileImg
                    src="https://res.cloudinary.com/dotkp2bln/image/upload/v1619572432/dev-tests/pyh30cr3wtqekitsy6ns.png"
                    alt="File 1"
                />
            </div>
            <DetailsContainer>
                <Date>Apr. 10 2021 3:11 PM</Date>
                <Size>12Mb</Size>
            </DetailsContainer>
        </Container>
    );
};
