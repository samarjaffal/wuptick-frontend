import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { LoggedLayout } from '../../Layouts/LoggedLayout';
import { Avatar } from '../../../components/Avatar/index';
import { Me } from '../../../requests/MeQuery../../../components/Me/index';
import { EditUserMutation } from '../../../requests/User/EditUserMutation';
import { ChangePasswordModal } from '../../../components/Modal/templates/ChangePasswordModal/index';
import {
    Title,
    SubTitle,
    Description,
    AccountTitle,
    FormContainer,
    InfoContainer,
    AvatarContainer,
    ButtonContainer,
    AccountContainer,
    PasswordResetContainer,
    PasswordAnchorContainer,
    DeleteAccountContainer,
    DeleteAnchorContainer,
    PasswordInfoContainer,
    DeleteAccountInfoContainer,
    Row,
    Input,
    Anchor,
    SaveButton,
    Hr,
} from './styles';
export const EditProfile = () => {
    const { register, handleSubmit } = useForm();
    const modalRef = useRef();
    return (
        <EditUserMutation>
            {({ doEditUser, loading }) => {
                const onFormSubmited = (formData) => {
                    const input = { ...formData };
                    doEditUser(input);
                };
                return (
                    <LoggedLayout>
                        <div className="Container">
                            <div className="titleContainer">
                                <Title>My Profile</Title>
                            </div>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <Me>
                                    {({
                                        name,
                                        last_name,
                                        email,
                                        avatar,
                                        occupation,
                                        birthday,
                                    }) => {
                                        return (
                                            <FormContainer>
                                                <InfoContainer>
                                                    <Row>
                                                        <Input
                                                            type="text"
                                                            name="name"
                                                            placeholder="Name"
                                                            width="45%"
                                                            ref={register()}
                                                            defaultValue={name}
                                                        />
                                                        <Input
                                                            type="text"
                                                            name="last_name"
                                                            placeholder="Last Name"
                                                            width="45%"
                                                            defaultValue={
                                                                last_name
                                                            }
                                                            ref={register()}
                                                        />
                                                    </Row>
                                                    <Row>
                                                        <Input
                                                            type="email"
                                                            name="email"
                                                            placeholder="Email"
                                                            width="100%"
                                                            ref={register()}
                                                            defaultValue={email}
                                                        />
                                                    </Row>
                                                    <Row>
                                                        <Input
                                                            type="text"
                                                            name="birthday"
                                                            placeholder="Birthday"
                                                            width="45%"
                                                            ref={register()}
                                                            defaultValue={
                                                                birthday
                                                            }
                                                        />
                                                        <Input
                                                            type="text"
                                                            name="occupation"
                                                            placeholder="Occupation"
                                                            width="45%"
                                                            ref={register()}
                                                            defaultValue={
                                                                occupation
                                                            }
                                                        />
                                                    </Row>
                                                </InfoContainer>
                                                <AvatarContainer>
                                                    <Avatar
                                                        hide={false}
                                                        size={120}
                                                        src={avatar}
                                                    />
                                                    <div>
                                                        <Anchor href="#">
                                                            Change picture
                                                        </Anchor>
                                                    </div>
                                                </AvatarContainer>
                                            </FormContainer>
                                        );
                                    }}
                                </Me>
                                <ButtonContainer>
                                    <SaveButton
                                        disabled={loading}
                                        onClick={handleSubmit(onFormSubmited)}
                                    >
                                        {loading
                                            ? 'Loading...'
                                            : 'Save Changes'}
                                    </SaveButton>
                                </ButtonContainer>
                            </form>
                        </div>
                        <div
                            className="Container"
                            style={{ marginBottom: '1em' }}
                        >
                            <div className="Title_Container">
                                <AccountTitle>Account</AccountTitle>
                            </div>
                            <AccountContainer>
                                <PasswordResetContainer>
                                    <PasswordInfoContainer>
                                        <SubTitle>Password</SubTitle>
                                        <Description>
                                            Change the password of your account
                                        </Description>
                                    </PasswordInfoContainer>
                                    <PasswordAnchorContainer>
                                        <Anchor
                                            onClick={() =>
                                                modalRef.current.openModal()
                                            }
                                        >
                                            Change password
                                        </Anchor>
                                    </PasswordAnchorContainer>
                                </PasswordResetContainer>
                                <Hr />
                                <DeleteAccountContainer>
                                    <DeleteAccountInfoContainer>
                                        <SubTitle>Delete</SubTitle>
                                        <Description>
                                            Delete my account
                                        </Description>
                                    </DeleteAccountInfoContainer>
                                    <DeleteAnchorContainer>
                                        <Anchor href="#" color="red">
                                            Delete account
                                        </Anchor>
                                    </DeleteAnchorContainer>
                                </DeleteAccountContainer>
                            </AccountContainer>
                        </div>
                        <ChangePasswordModal modalRef={modalRef} />
                    </LoggedLayout>
                );
            }}
        </EditUserMutation>
    );
};
