import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Modal } from '../../index';
import { ChangePasswordMutation } from '../../../../requests/ChangePasswordMutation';
import { Input } from '../../../Forms/Input/index';
import { Colors } from '../../../../assets/css/colors';
import { ButtonContainer, SaveButton, ErrorMessage } from './styles';

export const ChangePasswordModal = ({ modalRef }) => {
    const { register, handleSubmit, errors, watch } = useForm();
    const password = useRef({});
    password.current = watch('new_password', '');
    return (
        <ChangePasswordMutation modalRef={modalRef}>
            {({ doChangePassword, loading }) => {
                const onFormSubmited = (formData) => {
                    const input = {
                        oldPassword: formData.old_password,
                        newPassword: formData.new_password,
                    };
                    doChangePassword(input);
                };

                return (
                    <Modal ref={modalRef} title="Change your password.">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div style={{ width: '100%' }}>
                                <Input
                                    type="password"
                                    name="old_password"
                                    placeholder="Old Password"
                                    width="100%"
                                    refInput={register({
                                        required:
                                            'You must specify an old password',
                                    })}
                                    bg={Colors.white}
                                />
                                {errors.old_password && (
                                    <ErrorMessage>
                                        {errors.old_password.message}
                                    </ErrorMessage>
                                )}
                                <Input
                                    type="password"
                                    name="new_password"
                                    placeholder="New Password"
                                    width="100%"
                                    refInput={register({
                                        required:
                                            'You must specify a new password',
                                        minLength: {
                                            value: 8,
                                            message:
                                                'Password must have at least 8 characters',
                                        },
                                    })}
                                    bg={Colors.white}
                                />
                                {errors.new_password && (
                                    <ErrorMessage>
                                        {errors.new_password.message}
                                    </ErrorMessage>
                                )}
                                <Input
                                    type="password"
                                    name="confirm_password"
                                    placeholder="Confirm New Password"
                                    width="100%"
                                    refInput={register({
                                        validate: (value) =>
                                            value === password.current ||
                                            'The passwords do not match',
                                    })}
                                    bg={Colors.white}
                                />
                                {errors.confirm_password && (
                                    <ErrorMessage>
                                        {errors.confirm_password.message}
                                    </ErrorMessage>
                                )}
                                <ButtonContainer>
                                    <SaveButton
                                        width="100%"
                                        disabled={loading}
                                        onClick={handleSubmit(onFormSubmited)}
                                    >
                                        {loading
                                            ? 'Loading...'
                                            : 'Save Changes'}
                                    </SaveButton>
                                </ButtonContainer>
                            </div>
                        </form>
                    </Modal>
                );
            }}
        </ChangePasswordMutation>
    );
};

ChangePasswordModal.propTypes = {
    modalRef: PropTypes.any,
};
