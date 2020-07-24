import React, { useState } from 'react';
import { Title, Container, Content, Input, Button } from './styles';
import PropTypes from 'prop-types';

export const UserForm = ({ title }) => {
    return (
        <Container>
            <Content>
                <Title>{title}</Title>
                <Input type="email" placeholder="Email" required />
                <Input type="password" placeholder="Password" required />
                <Button>Save</Button>
            </Content>
        </Container>
    );
};

UserForm.propTypes = {
    title: PropTypes.string.isRequired,
};
