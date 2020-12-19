import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { useLocation } from '@reach/router';
import { Helmet } from 'react-helmet';
import { LoggedLayout } from '../Layouts/LoggedLayout/index';
import { ModuleTabs } from '../../components/Module/ModuleTabs';
import { TaskLists } from '../../components/Task/TaskLists/index';
import { AddNew } from '../../components/AddNew/index';
import { Sidebar } from '../../components/Sidebar/index';
import { ModuleSidebar } from './ModuleSidebar';
import { useUser } from '../../hooks/useUser';
import { GetTaskListsAndTasksQuery } from '../../requests/Module/GetTaskListsAndTasksQuery';
import { GetProjectSidebarQuery } from '../../requests/project/GetProjectSidebarQuery';
import {
    Container,
    TopContainer,
    RightItemsContainer,
    Title,
    Filter,
    InputSearch,
    ModuleContainer,
    SidebarContainer,
    TitleContainer,
} from './styles';

export const Module = ({ projectId, moduleId, location }) => {
    const path = useLocation();
    const currentURL = path.pathname;
    const [currentTab, setCurrentTab] = useState(null);
    const { tab } = queryString.parse(location.search);

    useEffect(() => {
        setCurrentTab(tab);
    }, [tab, moduleId]);

    return (
        <LoggedLayout styles={{ marginLeft: '0px' }}>
            <Helmet>
                <title>Wuptick - Module</title>
            </Helmet>

            <Container>
                <SidebarContainer>
                    <GetProjectSidebarQuery projectId={projectId}>
                        {({ data }) => {
                            const project = data.getProject;
                            return (
                                <Sidebar>
                                    <ModuleSidebar project={project} />
                                </Sidebar>
                            );
                        }}
                    </GetProjectSidebarQuery>
                </SidebarContainer>

                <GetTaskListsAndTasksQuery moduleId={moduleId}>
                    {({ data }) => {
                        const module = data.getModule;

                        return (
                            <ModuleContainer>
                                <TopContainer>
                                    <TitleContainer>
                                        <Title>{module.name}</Title>
                                    </TitleContainer>

                                    <RightItemsContainer>
                                        <div>
                                            <Filter>Filter</Filter>
                                        </div>
                                        <InputSearch
                                            type="text"
                                            placeholder="Search"
                                        />
                                    </RightItemsContainer>
                                </TopContainer>

                                <div className="TabsContainer">
                                    <ModuleTabs
                                        currentTab={currentTab}
                                        currentURL={currentURL}
                                    />
                                </div>

                                <div className="TasksLists">
                                    <TaskLists lists={module.task_lists} />
                                    <AddNew
                                        text="Add List"
                                        icon={true}
                                        border={true}
                                    />
                                </div>
                            </ModuleContainer>
                        );
                    }}
                </GetTaskListsAndTasksQuery>
            </Container>
        </LoggedLayout>
    );
};

Module.propTypes = {};
