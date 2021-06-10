import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { LoggedLayout } from '../../Layouts/LoggedLayout';
import { Avatar } from '../../../components/Avatar/index';
import { Me } from '../../../requests/MeQuery../../../components/Me/index';
import { EditUserMutation } from '../../../requests/User/EditUserMutation';
import { ChangePasswordModal } from '../../../components/Modal/templates/ChangePasswordModal/index';
import { EditProfileAvatar } from '../EditProfileAvatar';
import { Colors } from '../../../assets/css/colors';
import {
    Container,
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
                        <Container>
                            <Container>
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
                                            color,
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
                                                                defaultValue={
                                                                    name
                                                                }
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
                                                                defaultValue={
                                                                    email
                                                                }
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
                                                    <EditProfileAvatar
                                                        user={{
                                                            avatar,
                                                            name,
                                                            last_name,
                                                            color,
                                                        }}
                                                    />
                                                </FormContainer>
                                            );
                                        }}
                                    </Me>
                                    <ButtonContainer>
                                        <SaveButton
                                            disabled={loading}
                                            onClick={handleSubmit(
                                                onFormSubmited
                                            )}
                                        >
                                            {loading
                                                ? 'Loading...'
                                                : 'Save Changes'}
                                        </SaveButton>
                                    </ButtonContainer>
                                </form>
                            </Container>
                            <Container customProps="margin-bottom:1em;">
                                <div className="Title_Container">
                                    <AccountTitle>Account</AccountTitle>
                                </div>
                                <AccountContainer>
                                    <PasswordResetContainer>
                                        <PasswordInfoContainer>
                                            <SubTitle>Password</SubTitle>
                                            <Description>
                                                Change the password of your
                                                account
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
                                            <SubTitle>Inactive my account</SubTitle>
                                            <Description>
                                                If you want to inactive your account, please contact us at &nbsp;<a style={{ color: Colors.black }} href="mailto: dev.wuptick@gmail.com">dev.wuptick@gmail.com</a>
                                            </Description>
                                        </DeleteAccountInfoContainer>
                                    </DeleteAccountContainer>
                                </AccountContainer>
                            </Container>
                            <ChangePasswordModal modalRef={modalRef} />
                        </Container>
                    </LoggedLayout>
                );
            }}
        </EditUserMutation>
    );
};
