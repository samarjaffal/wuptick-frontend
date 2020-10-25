import React, { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { LoggedLayout } from '../Layouts/LoggedLayout';
import { GetProjectQuery } from '../../requests/project/getProjectQuery';
import { Image } from '../../components/Image';
import { ListModules } from '../../components/Module/ListModules';
import { Tabs } from '../../components/Tabs/index';
import { TabItem } from '../../components/Tabs/TabItem';
import { MembersList } from '../../components/MembersList/index';
import { ListTopics } from '../../components/Topics/ListTopics/index';
import { GetProjectModules } from '../../requests/Module/getProjectModuleQuery';
import { GetProjectTopics } from '../../requests/Topic/GetProjectTopics';
/* import { TaskItem } from '../../components/Task/TaskItem/index'; */
import { ListFiles } from '../../components/File/ListFiles/index';
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
        return (
            (currentTab == undefined && (
                <GetProjectModules projectId={id}>
                    {({ data }) => (
                        <ListModules
                            modules={data.getProjectModules}
                            projectId={id}
                        />
                    )}
                </GetProjectModules>
            )) ||
            (currentTab == 'topics' && (
                <GetProjectTopics projectId={id}>
                    {({ data }) => (
                        <ListTopics topics={data.getProjectTopics} />
                    )}
                </GetProjectTopics>
            )) ||
            (currentTab == 'files' && <ListFiles />) ||
            /*  (currentTab == 'priority-tasks' && <TaskItem />) || */
            null
        );
    };

    return (
        <LoggedLayout>
            <Helmet>
                <title>Wuptick - Project</title>
            </Helmet>
            <GetProjectQuery projectId={id}>
                {({ data }) => {
                    const { getProject: project } = data;
                    const members = project.members.map(
                        (member) => member.user
                    );
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
                                    <MembersList members={members} />
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
