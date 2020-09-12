import React from 'react';
import { Link } from '@reach/router';
import { LoggedLayout } from '../Layouts/LoggedLayout';
import { Avatar } from '../../components/Avatar/index';
import {
    ProfileInfoContainer,
    Profile as ProfileStyled,
    ProfileInfo,
    Name,
    Email,
    Ocupation,
    Age,
    DescriptionContainer,
    Description,
    EditButton,
    ButtonContainer,
} from './styles';
export const Profile = () => {
    return (
        <LoggedLayout>
            <div className="Container">
                <div className="ProfileContainer">
                    <ProfileInfoContainer>
                        <ProfileStyled>
                            <Avatar size={100} />
                            <ProfileInfo>
                                <Name>Samar Jaffal</Name>
                                <Email>samarjaffalh@gmail.com</Email>
                                <Ocupation>Web Developer</Ocupation>
                                <Age>22 years</Age>
                            </ProfileInfo>
                        </ProfileStyled>
                        <ButtonContainer>
                            <EditButton to="/">Edit Profile</EditButton>
                        </ButtonContainer>
                    </ProfileInfoContainer>
                    <DescriptionContainer>
                        <Description>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Architecto, vel itaque? Cumque iusto, fugit
                            asperiores iure sunt architecto nisi debitis. Quasi
                            architecto officia ipsa animi, impedit voluptate
                            omnis sapiente, tempora, velit quibusdam
                            consequuntur iure aliquid!
                        </Description>
                    </DescriptionContainer>
                </div>
            </div>
        </LoggedLayout>
    );
};
