import React, { Fragment } from 'react';
import { Container, Image, Title, Details, DetailsContainer } from './styles';

export const Info = ({ name, owner, time }) => {
    return (
        <Fragment>
            <Container>
                <Image
                    src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                    alt="Element Icon"
                />
                <DetailsContainer>
                    <Title>{name || 'Lorem ipsum dolor'}</Title>
                    <Details>Owner: {owner}</Details>
                    <Details>{time}</Details>
                </DetailsContainer>
            </Container>
        </Fragment>
    );
};
