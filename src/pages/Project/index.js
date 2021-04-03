import React, { useState, useEffect, useRef } from 'react';
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
import { AddProjectModal } from '../../components/Modal/templates/AddProjectModal/index';
import { EditProjectMutation } from '../../requests/project/EditProjectMutation';
import { GetProjectModules } from '../../requests/Module/getProjectModuleQuery';
import { GetProjectTopics } from '../../requests/Topic/GetProjectTopics';
import { ListFiles } from '../../components/File/ListFiles/index';
import { DropdownContextProvider } from '../../context/DropdownContext';
import { SkeletonProject } from '../../components/Loaders/SkeletonProject/index';
import { SkeletonModulesList } from '../../components/Loaders/SkeletonModulesList/index';
import { FlexCenter } from '../../components/SharedComponents/styles';
import {
    Container,
    InfoContainer,
    ProjectInfoContainer,
    ProjectName,
    ProjectDescription,
    MembersContainer,
    EditIcon,
    EditButton,
    ImageContainer,
    ProjectNameContainer,
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
    const modalRef = useRef();

    useEffect(() => {
        setCurrentTab(tab);
    }, [tab, id]);

    const renderTabComponent = () => {
        return (
            (currentTab == undefined && (
                <GetProjectModules projectId={id}>
                    {({ data, loading }) => {
                        if (loading) {
                            return <SkeletonModulesList quantity={5} />;
                        }

                        return (
                            <DropdownContextProvider>
                                <ListModules
                                    modules={data.getProjectModules}
                                    projectId={id}
                                />
                            </DropdownContextProvider>
                        );
                    }}
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
            null
        );
    };

    return (
        <LoggedLayout>
            <Helmet>
                <title>Wuptick - Project</title>
            </Helmet>
            <GetProjectQuery projectId={id}>
                {({ data, loading }) => {
                    if (loading || !data) {
                        return <SkeletonProject />;
                    }
                    const { getProject: project } = data;
                    const members = project.members.map(
                        (member) => member.user
                    );
                    return (
                        <Container>
                            <div>
                                <ProjectInfoContainer>
                                    <ImageContainer>
                                        <Image
                                            size={100}
                                            description="Project Image"
                                            src={project.image}
                                        />
                                    </ImageContainer>

                                    <InfoContainer>
                                        <ProjectNameContainer>
                                            <ProjectName>
                                                {project.name ||
                                                    'Add a project name'}
                                            </ProjectName>
                                            <EditButton
                                                onClick={() =>
                                                    modalRef.current.openModal()
                                                }
                                            >
                                                <EditIcon icon="edit" />
                                            </EditButton>
                                        </ProjectNameContainer>
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
            <EditProjectMutation modalRef={modalRef}>
                {({ doEditProject, loading }) => (
                    <AddProjectModal
                        modalRef={modalRef}
                        action="update"
                        loading={loading}
                        doFunction={doEditProject}
                    />
                )}
            </EditProjectMutation>
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
