import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { useLocation } from '@reach/router';
import { Helmet } from 'react-helmet';
import Context, { TaskContextProvider } from '../../context/TaskContext';
import { LoggedLayout } from '../Layouts/LoggedLayout/index';
import { ModuleTabs } from '../../components/Module/ModuleTabs';
import { TasksSection } from './TasksSection';
import { AddNew } from '../../components/AddNew/index';
/* import { Sidebar } from '../../components/Sidebar/index'; */
/* import { Sidebar } from '../../components/Sidebar2/index';
import { ModuleSidebar } from './ModuleSidebar';
import { GetProjectSidebarQuery } from '../../requests/project/GetProjectSidebarQuery'; */
import { DropdownContextProvider } from '../../context/DropdownContext';
import { GetTaskListsAndTasksQuery } from '../../requests/Module/GetTaskListsAndTasksQuery';

import { AddTaskListMutation } from '../../requests/Module/AddTaskListMutation';
import { useUser } from '../../hooks/useUser';
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
    const { tab } = queryString.parse(location.search);
    const { teamSelected, setCurrentProject } = useUser();
    let newList = '';
    const callBackNewList = (value) => {
        newList = value;
    };

    useEffect(() => {
        if (Object.keys(teamSelected).length > 0) {
            const project = teamSelected.projects.find(
                (project) => project._id == projectId
            );
            if (project) {
                setCurrentProject(project);
            }
        }
    }, [teamSelected.projects]);

    return (
        <LoggedLayout>
            <Helmet>
                <title>Wuptick - Module</title>
            </Helmet>

            <Container>
                {/*  <SidebarContainer>
                    <Sidebar>
                        <GetProjectSidebarQuery projectId={projectId}>
                            {({ data }) => {
                                const project = data.getProject;
                                return <ModuleSidebar project={project} />;
                            }}
                        </GetProjectSidebarQuery>
                    </Sidebar>
                </SidebarContainer> */}
                {/* <SidebarContainer>
                    <Sidebar />
                </SidebarContainer> */}

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
                                        tab={tab}
                                        currentURL={currentURL}
                                        moduleId={moduleId}
                                    />
                                </div>

                                <div className="TasksLists">
                                    <DropdownContextProvider>
                                        <TaskContextProvider>
                                            <Context.Consumer>
                                                {() => (
                                                    <TasksSection
                                                        lists={
                                                            module.task_lists
                                                        }
                                                        moduleId={moduleId}
                                                    />
                                                )}
                                            </Context.Consumer>
                                        </TaskContextProvider>
                                    </DropdownContextProvider>
                                    <AddTaskListMutation>
                                        {({ doCreateList }) => {
                                            const createList = () => {
                                                console.log(
                                                    moduleId,
                                                    newList,
                                                    'testing'
                                                );

                                                doCreateList(moduleId, newList);
                                            };
                                            return (
                                                <AddNew
                                                    text="Add List"
                                                    icon={true}
                                                    border={true}
                                                    setValue={callBackNewList}
                                                    doFunction={createList}
                                                />
                                            );
                                        }}
                                    </AddTaskListMutation>
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
