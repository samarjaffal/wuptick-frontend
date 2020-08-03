import React, { Fragment, useRef } from 'react';
import PropTypes from 'prop-types';
import {
    Title,
    Container,
    Content,
    Input,
    Button,
    Anchor,
    ErrorMessage,
} from './styles';
import { ClickableText } from '../ClickableText/index';
import { useForm } from 'react-hook-form';

export const UserForm = ({ title, type, onSubmit, loading, error }) => {
    const { register, handleSubmit, errors, watch } = useForm();

    const password = useRef({});
    password.current = watch('password', '');

    const onFormSubmited = (data) => {
        const formData = { email: data.email, password: data.password };
        onSubmit(formData);
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
            <form onSubmit={(e) => e.preventDefault()}>
                <Container>
                    <Content>
                        <Title>{title}</Title>
                        <Input
                            name="email"
                            ref={register({
                                required: {
                                    value: true,
                                    message: 'Email field is required.',
                                },
                            })}
                            type="email"
                            placeholder="Email"
                        />

                        {errors.email && (
                            <ErrorMessage>{errors.email.message}</ErrorMessage>
                        )}
                        <Input
                            name="password"
                            ref={register({
                                required: 'You must specify a password',
                                minLength: {
                                    value: 8,
                                    message:
                                        'Password must have at least 8 characters',
                                },
                            })}
                            type="password"
                            placeholder="Password"
                        />
                        {errors.password && (
                            <ErrorMessage>
                                {errors.password.message}
                            </ErrorMessage>
                        )}
                        {type == 'register' && (
                            <Fragment>
                                <Input
                                    name="confirm_password"
                                    ref={register({
                                        validate: (value) =>
                                            value === password.current ||
                                            'The passwords do not match',
                                    })}
                                    type="password"
                                    placeholder="Confirm Password"
                                />
                                {errors.confirm_password && (
                                    <ErrorMessage>
                                        {errors.confirm_password.message}
                                    </ErrorMessage>
                                )}
                            </Fragment>
                        )}
                        <Button onClick={handleSubmit(onFormSubmited)}>
                            {title}
                        </Button>
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
    loading: PropTypes.bool,
    error: PropTypes.object,
};
