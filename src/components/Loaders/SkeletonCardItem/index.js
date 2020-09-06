import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Container, DetailsContainer } from './styles';

export const SkeletonCardItem = ({ qty = 6 }) => {
    return Array(qty)
        .fill()
        .map((item, index) => (
            <Container key={index}>
                <Skeleton height={50} width={50} />
                <DetailsContainer>
                    <Skeleton height={10} width={'100%'} />
                    <Skeleton height={30} width={'100%'} />
                </DetailsContainer>
            </Container>
        ));
};
