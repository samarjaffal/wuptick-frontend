import React, { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { LoggedLayout } from '../Layouts/LoggedLayout';
import { GetProjectQuery } from '../../requests/project/getProjectQuery';
import { Image } from '../../components/Image';
import { ButtonHome } from '../../components/ButtonHome';
import { ListModules } from '../../components/Module/ListModules';
import { Tabs } from '../../components/Tabs/index';
import { TabItem } from '../../components/Tabs/TabItem';
import { MembersList } from '../../components/MembersList/index';
import { ListTopics } from '../../components/Topics/ListTopics/index';
import { Colors } from '../../assets/css/colors';
import {
    Container,
    InfoContainer,
    ProjectInfoContainer,
    ProjectName,
    ProjectDescription,
    MembersContainer,
} from './styles';

const ProjectTabs = ({ currentURL, currentTab }) => {
    return (
        <Tabs>
            <TabItem
                text="Modules"
                url={`${currentURL}`}
                currenTab={currentTab}
                tab={undefined}
            />
            <TabItem
                text="Priority Tasks"
                url={`${currentURL}?tab=priority-tasks`}
                currenTab={currentTab}
                tab="priority-tasks"
            />
            <TabItem
                text="Topics"
                url={`${currentURL}?tab=topics`}
                currenTab={currentTab}
                tab="topics"
            />
            <TabItem
                text="Files"
                url={`${currentURL}?tab=files`}
                currenTab={currentTab}
                tab="files"
            />
        </Tabs>
    );
};

export const Project = ({ id, location }) => {
    const path = useLocation();
    const currentURL = path.pathname;
    const [currentTab, setCurrentTab] = useState(null);
    const { tab } = queryString.parse(location.search);

    useEffect(() => {
        setCurrentTab(tab);
    }, [tab, id]);

    const renderTabComponent = () => {
        return currentTab == undefined ? <ListModules /> : <ListTopics />;
    };

    return (
        <LoggedLayout>
            <Helmet>
                <title>Wuptick - Project</title>
            </Helmet>
            <GetProjectQuery projectId={id}>
                {({ data }) => {
                    const { getProject: project } = data;
                    return (
                        <Container>
                            <div>
                                <ProjectInfoContainer>
                                    <Image
                                        size={100}
                                        description="Project Image"
                                        src={project.image}
                                    />
                                    <InfoContainer>
                                        <ProjectName>
                                            {project.name ||
                                                'Add a project name'}
                                        </ProjectName>
                                        <ProjectDescription>
                                            {project.description ||
                                                'Add a new description'}
                                        </ProjectDescription>
                                    </InfoContainer>
                                </ProjectInfoContainer>
                                <MembersContainer>
                                    <MembersList />
                                    <ButtonHome
                                        url="/"
                                        icon="plus"
                                        color={Colors.primary}
                                        margin="0.5em 0 0 0.5em"
                                    >
                                        Add
                                    </ButtonHome>
                                </MembersContainer>
                            </div>
                            <ProjectTabs
                                currentTab={currentTab}
                                currentURL={currentURL}
                            />
                            {renderTabComponent()}
                        </Container>
                    );
                }}
            </GetProjectQuery>
        </LoggedLayout>
    );
};

Project.propTypes = {
    id: PropTypes.string,
    location: PropTypes.object,
};

ProjectTabs.propTypes = {
    currentURL: PropTypes.string,
    currentTab: PropTypes.string,
};
