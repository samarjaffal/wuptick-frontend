import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from '@reach/router';
import queryString from 'query-string';
import { LoggedLayout } from '../Layouts/LoggedLayout';
import { Avatar } from '../../components/Avatar/index';
import { Tabs } from '../../components/Tabs';
import { TabItem } from '../../components/Tabs/TabItem';
import { ListProjects } from '../../components/Project/ListProjects/';
import { ListTeams } from '../../components/Teams/ListTeams/index';
import { DropdownContextProvider } from '../../context/DropdownContext';
import { GetUserQuery } from '../../requests/User/GetUserQuery';
import { useUser } from '../../hooks/useUser';
import { SkeletonInfoProfile } from '../../components/Loaders/SkeletonInfoProfile/index';
import { SkeletonCardItem } from '../../components/Loaders/SkeletonCardItem/index';
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

export const Profile = ({ location, username }) => {
    const path = useLocation();
    const currentURL = path.pathname;
    const [currentTab, setCurrentTab] = useState(null);
    const [userId, setUserId] = useState(null);
    const { currentUser, profileURL, getAge } = useUser();
    const { tab } = queryString.parse(location.search);

    const getUserIdFromURL = () => {
        const splittedURL = currentURL.split('-');
        setUserId(splittedURL[2]);
    };

    const filterTeamsByUserLogged = (teams) => {
        return teams.filter((team) =>
            team.members.some((member) => member._id == currentUser._id)
        );
    };

    useEffect(() => {
        setCurrentTab(tab);
        getUserIdFromURL();
    }, [tab, userId, currentURL]);

    const renderTabComponent = () => {
        return (
            <GetUserQuery
                userId={userId}
                loader={SkeletonCardItem}
                loaderProps={{ qty: 6 }}
            >
                {({ data }) => {
                    const { getUser: user } = data;

                    const teams = filterTeamsByUserLogged(user.teams);

                    return currentTab == undefined ||
                        currentTab == 'projects' ? (
                        <DropdownContextProvider>
                            <ListProjects teams={teams} userId={userId} />{' '}
                        </DropdownContextProvider>
                    ) : (
                        <DropdownContextProvider>
                            <ListTeams teams={teams} userId={userId} />
                        </DropdownContextProvider>
                    );
                }}
            </GetUserQuery>
        );
    };

    return (
        <LoggedLayout>
            <div className="Container" style={{ width: '100%' }}>
                <GetUserQuery
                    userId={userId}
                    loader={SkeletonInfoProfile}
                    loaderProps={{ qty: 1 }}
                >
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
                                            user={user}
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
                                            <Age>
                                                {getAge(user.birthday)} years
                                            </Age>
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
                        url={`${currentURL}?tab=projects`}
                        currenTab={currentTab}
                        tab="projects"
                        altTab="/"
                    />
                    <TabItem
                        text="Teams"
                        url={`${currentURL}?tab=teams`}
                        currenTab={currentTab}
                        tab="teams"
                    />
                </Tabs>
                {renderTabComponent()}
            </div>
        </LoggedLayout>
    );
};

Profile.propTypes = {
    location: PropTypes.object,
    username: PropTypes.any,
};
