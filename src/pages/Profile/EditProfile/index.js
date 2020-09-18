import React from 'react';
import { LoggedLayout } from '../../Layouts/LoggedLayout';
import { Avatar } from '../../../components/Avatar/index';
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
    return (
        <LoggedLayout>
            <div className="Container">
                <div className="titleContainer">
                    <Title>My Profile</Title>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <FormContainer>
                        <InfoContainer>
                            <Row>
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    width="45%"
                                />
                                <Input
                                    type="text"
                                    name="last_name"
                                    placeholder="Last Name"
                                    width="45%"
                                />
                            </Row>
                            <Row>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value="samarjaffalh@gmail.com"
                                    width="100%"
                                />
                            </Row>
                            <Row>
                                <Input
                                    type="text"
                                    name="birthday"
                                    placeholder="Birthday"
                                    width="45%"
                                />
                                <Input
                                    type="text"
                                    name="occupation"
                                    placeholder="Occupation"
                                    width="45%"
                                />
                            </Row>
                        </InfoContainer>
                        <AvatarContainer>
                            <Avatar hide={false} size={120} />
                            <div>
                                <Anchor href="#">Change picture</Anchor>
                            </div>
                        </AvatarContainer>
                    </FormContainer>
                    <ButtonContainer>
                        <SaveButton>Save Changes</SaveButton>
                    </ButtonContainer>
                </form>
            </div>
            <div className="Container" style={{ marginBottom: '1em' }}>
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
                            <Anchor href="#">Change password</Anchor>
                        </PasswordAnchorContainer>
                    </PasswordResetContainer>
                    <Hr />
                    <DeleteAccountContainer>
                        <DeleteAccountInfoContainer>
                            <SubTitle>Delete</SubTitle>
                            <Description>Delete my account</Description>
                        </DeleteAccountInfoContainer>
                        <DeleteAnchorContainer>
                            <Anchor href="#" color="red">
                                Delete account
                            </Anchor>
                        </DeleteAnchorContainer>
                    </DeleteAccountContainer>
                </AccountContainer>
            </div>
        </LoggedLayout>
    );
};
