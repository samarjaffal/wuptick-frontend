import React from 'react';
import {
    ActitivityContainer,
    Container,
    ImageContainer,
    AvatarSkeleton,
} from './styles';
import { ListContainer } from '../../ListContainer/index';
import Skeleton from 'react-loading-skeleton';

export const SkeletonActivity = () => {
    return Array(9)
        .fill()
        .map((item, index) => (
            <Container key={index}>
                <ImageContainer>
                    <AvatarSkeleton circle={true} height={50} width={50} />
                </ImageContainer>
                <ActitivityContainer>
                    <Skeleton height={10} width={'50%'} />
                    <ListContainer shadow={true}>
                        <Skeleton height={10} width={'60%'} />
                        <Skeleton height={30} width={'100%'} />
                    </ListContainer>
                </ActitivityContainer>
            </Container>
        ));
};
