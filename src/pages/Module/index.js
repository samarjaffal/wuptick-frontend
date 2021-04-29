import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { useLocation } from '@reach/router';
import { Helmet } from 'react-helmet';
import Context, { TaskContextProvider } from '../../context/TaskContext';
import { LoggedLayout } from '../Layouts/LoggedLayout/index';
import { ModuleTabs } from '../../components/Module/ModuleTabs';
import { ModuleTaskLists } from './ModuleTasksLists';
/* import { Sidebar } from '../../components/Sidebar/index'; */
/* import { Sidebar } from '../../components/Sidebar2/index';
import { ModuleSidebar } from './ModuleSidebar';
import { GetProjectSidebarQuery } from '../../requests/project/GetProjectSidebarQuery'; */
import { ModuleTopBar } from './ModuleTopBar';
import { SkeletonModule } from '../../components/Loaders/SkeletonModule/index';
import { GetTaskListsAndTasksQuery } from '../../requests/Module/GetTaskListsAndTasksQuery';
import { useUser } from '../../hooks/useUser';

import {
    Container,
    ModuleContainer,
    SidebarContainer,
    TitleContainer,
} from './styles';

export const Module = ({ projectId, moduleId, location }) => {
    const path = useLocation();
    const currentURL = path.pathname;
    const { tab, task } = queryString.parse(location.search);
    const {
        setCurrentProject,
        currentUser,
        setTeam,
        getTeamByProjectId,
        projectExistInTeam,
    } = useUser();

    let newList = '';
    const callBackNewList = (value) => {
        newList = value;
    };

    const initModule = () => {
        if (Object.keys(currentUser).length == 0) return;
        if (!('teams' in currentUser)) return;
        let team = getTeamByProjectId(currentUser.teams, projectId);
        if (team) setTeam(team);

        let project = projectExistInTeam(team, projectId);
        if (project) setCurrentProject(project);
    };

    useEffect(() => {
        initModule();
    }, [currentUser.teams]);

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

                <TaskContextProvider>
                    <Context.Consumer>
                        {() => (
                            <GetTaskListsAndTasksQuery moduleId={moduleId}>
                                {({ data, loading }) => {
                                    if (loading) {
                                        return <SkeletonModule />;
                                    }

                                    const module = data.getModule;

                                    return (
                                        <ModuleContainer>
                                            <ModuleTopBar module={module} />

                                            <div className="TabsContainer">
                                                <ModuleTabs
                                                    tab={tab}
                                                    currentURL={currentURL}
                                                    moduleId={moduleId}
                                                />
                                            </div>

                                            <ModuleTaskLists
                                                moduleId={moduleId}
                                                task={task}
                                                module={module}
                                            />
                                        </ModuleContainer>
                                    );
                                }}
                            </GetTaskListsAndTasksQuery>
                        )}
                    </Context.Consumer>
                </TaskContextProvider>
            </Container>
        </LoggedLayout>
    );
};

Module.propTypes = {
    projectId: PropTypes.string,
    moduleId: PropTypes.string,
    location: PropTypes.object,
};
