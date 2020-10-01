import React from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from '../../index';
import { Input } from '../../../Forms/Input/index';
import { Colors } from '../../../../assets/css/colors';
import { ButtonContainer, SaveButton } from './styles';

export const ChangePasswordModal = ({ modalRef }) => {
    const { register, handleSubmit } = useForm();

    return (
        <Modal ref={modalRef} title="Change your password.">
            <form onSubmit={(e) => e.preventDefault()}>
                <div style={{ width: '100%' }}>
                    <Input
                        type="password"
                        name="old_password"
                        placeholder="Old Password"
                        width="100%"
                        ref={register()}
                        bg={Colors.white}
                    />
                    <Input
                        type="password"
                        name="new_password"
                        placeholder="New Password"
                        width="100%"
                        ref={register()}
                        bg={Colors.white}
                    />
                    <Input
                        type="password"
                        name="confirm_password"
                        placeholder="Confirm New Password"
                        width="100%"
                        ref={register()}
                        bg={Colors.white}
                    />
                    <ButtonContainer>
                        <SaveButton width="100%">Save</SaveButton>
                    </ButtonContainer>
                </div>
            </form>
        </Modal>
    );
};
