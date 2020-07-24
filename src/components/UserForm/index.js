import React from 'react';
import { Title, Container, Content, Input, Button } from './styles';
import PropTypes from 'prop-types';
import { useInputValue } from '../../hooks/useInputValue';

export const UserForm = ({ title, type }) => {
    const email = useInputValue('');
    const password = useInputValue('');
    const repeatPassword = useInputValue('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submited');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Container>
                <Content>
                    <Title>{title}</Title>
                    <Input
                        {...email}
                        type="email"
                        placeholder="Email"
                        required
                    />
                    <Input
                        {...password}
                        type="password"
                        placeholder="Password"
                        required
                    />
                    {type == 'register' && (
                        <Input
                            {...repeatPassword}
                            type="password"
                            placeholder="Confirm Password"
                            required
                        />
                    )}
                    <Button>{title}</Button>
                </Content>
            </Container>
        </form>
    );
};

UserForm.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};
