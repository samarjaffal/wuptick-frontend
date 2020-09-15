import React, { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';
import queryString from 'query-string';
import { LoggedLayout } from '../Layouts/LoggedLayout';
import { Avatar } from '../../components/Avatar/index';
import { Tabs } from '../../components/Tabs';
import { TabItem } from '../../components/Tabs/TabItem';
import { ListProjects } from '../../components/Project/ListProjects/';
import { GetUserQuery } from '../../requests/User/GetUserQuery';
import { useUser } from '../../hooks/useUser';
import {
    ProfileInfoContainer,
    Profile as ProfileStyled,
    ProfileInfo,
    Name,
    Email,
    Ocupation,
    Age,
    EditButton,
    ButtonContainer,
} from './styles';

export const Profile = ({ location }) => {
    const path = useLocation();
    const currentURL = path.pathname;
    const [currentTab, setCurrentTab] = useState(null);
    const [userId, setUserId] = useState(null);
    const { currentUser, profileURL } = useUser();
    const { tab } = queryString.parse(location.search);

    const getUserIdFromURL = () => {
        const splittedURL = currentURL.split('-');
        setUserId(splittedURL[2]);
    };

    useEffect(() => {
        setCurrentTab(tab);
        getUserIdFromURL();
    }, [tab, userId]);

    const renderTabComponent = () => {
        let component =
            currentTab == undefined ? (
                <GetUserQuery userId={userId}>
                    {({ data }) => {
                        const { getUser: user } = data;
                        return <ListProjects teams={user.teams} />;
                    }}
                </GetUserQuery>
            ) : null;
        return component;
    };

    return (
        <LoggedLayout>
            <div className="Container">
                <GetUserQuery userId={userId}>
                    {({ data }) => {
                        const { getUser: user } = data;
                        return (
                            <div
                                className="ProfileContainer"
                                style={{ marginBottom: '2em' }}
                            >
                                <ProfileInfoContainer>
                                    <ProfileStyled>
                                        <Avatar
                                            size={100}
                                            src={user.avatar}
                                            hide={false}
                                        />
                                        <ProfileInfo>
                                            <Name>
                                                {user.name} {user.last_name}
                                            </Name>
                                            <Email>{user.email}</Email>
                                            <Ocupation>
                                                {user.occupation}
                                            </Ocupation>
                                            <Age>22 years</Age>
                                        </ProfileInfo>
                                    </ProfileStyled>
                                    {currentUser._id == userId && (
                                        <ButtonContainer>
                                            <EditButton
                                                to={`/${profileURL}/edit`}
                                            >
                                                Edit Profile
                                            </EditButton>
                                        </ButtonContainer>
                                    )}
                                </ProfileInfoContainer>
                            </div>
                        );
                    }}
                </GetUserQuery>
                <Tabs>
                    <TabItem
                        text="Projects"
                        url={`${currentURL}`}
                        currenTab={currentTab}
                        tab={undefined}
                    />
                    {/*     <TabItem
                        text="Teams"
                        url={`${currentURL}?tab=teams`}
                        currenTab={currentTab}
                        tab="teams"
                    /> */}
                </Tabs>
                {renderTabComponent()}
            </div>
        </LoggedLayout>
    );
};
