import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Title, Container, Content, Input, Button, Anchor } from './styles';
import { ClickableText } from '../ClickableText/index';
import { useInputValue } from '../../hooks/useInputValue';

export const UserForm = ({ title, type, onSubmit, loading, error }) => {
    const email = useInputValue('');
    const password = useInputValue('');
    const repeatPassword = useInputValue('');

    console.log(onSubmit, 'onsubmit');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email: email.value, password: password.value });
    };

    const anchorText =
        type == 'login'
            ? `You don't have an account? `
            : 'Do you already have an account? ';

    const anchorURL = type == 'login' ? 'register' : 'login';
    const anchorTitle = anchorURL.charAt(0).toUpperCase() + anchorURL.slice(1);

    if (error) {
        return <div>User exists already </div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Fragment>
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
                        <Button type="submit">{title}</Button>
                        <ClickableText text={anchorText}>
                            <Anchor to={`/${anchorURL}`}>{anchorTitle}</Anchor>
                        </ClickableText>
                    </Content>
                </Container>
            </form>
        </Fragment>
    );
};

UserForm.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onSubmit: PropTypes.func,
};
