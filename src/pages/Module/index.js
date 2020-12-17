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
import {
    Container,
    TopContainer,
    RightItemsContainer,
    Title,
    Filter,
    InputSearch,
    ModuleContainer,
    SidebarContainer,
} from './styles';

export const Module = ({ id, location }) => {
    const path = useLocation();
    const currentURL = path.pathname;
    const [currentTab, setCurrentTab] = useState(null);
    const { tab } = queryString.parse(location.search);

    useEffect(() => {
        setCurrentTab(tab);
    }, [tab, id]);

    return (
        <LoggedLayout styles={{ marginLeft: '20px' }}>
            <Helmet>
                <title>Wuptick - Module</title>
            </Helmet>

            <Container>
                <SidebarContainer>
                    <Sidebar>
                        <ModuleSidebar />
                    </Sidebar>
                </SidebarContainer>

                <ModuleContainer>
                    <TopContainer>
                        <div className="TitleContainer">
                            <Title>#Frontend Module</Title>
                        </div>

                        <RightItemsContainer>
                            <div>
                                <Filter>Filter</Filter>
                            </div>
                            <div>
                                <InputSearch type="text" placeholder="Search" />
                            </div>
                        </RightItemsContainer>
                    </TopContainer>

                    <div className="TabsContainer">
                        <ModuleTabs
                            currentTab={currentTab}
                            currentURL={currentURL}
                        />
                    </div>

                    <div className="TasksLists">
                        <TaskLists />
                        <AddNew text="Add List" icon={true} border={true} />
                    </div>
                </ModuleContainer>
            </Container>
        </LoggedLayout>
    );
};

Module.propTypes = {};
