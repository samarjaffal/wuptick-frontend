import React, { Fragment } from 'react';
import { Container, Title, Details, DetailsContainer } from './styles';
import { Image } from '../Image/index';
export const Info = ({ name, owner, time, image, description }) => {
    return (
        <Fragment>
            <Container>
                <Image src={image} description={description} />
                <DetailsContainer>
                    <Title>{name || 'Lorem ipsum dolor'}</Title>
                    <Details>Owner: {owner}</Details>
                    <Details>{time}</Details>
                </DetailsContainer>
            </Container>
        </Fragment>
    );
};
