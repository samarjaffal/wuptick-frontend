import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { useLocation } from '@reach/router';
import { Helmet } from 'react-helmet';
import { LoggedLayout } from '../Layouts/LoggedLayout/index';
import { ModuleTabs } from './ModuleTabs';
import { Div, FlexCenter } from '../../components/SharedComponents/styles';
import {
    TopContainer,
    RightItemsContainer,
    Title,
    Filter,
    InputSearch,
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
        <LoggedLayout>
            <Helmet>
                <title>Wuptick - Module</title>
            </Helmet>

            <div className="Container">
                <div className="Sidebar"></div>

                <div className="ModuleContainer">
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
                    <div className="SideBarContainer">
                        <ModuleTabs
                            currentTab={currentTab}
                            currentURL={currentURL}
                        />
                    </div>
                </div>
            </div>
        </LoggedLayout>
    );
};

Module.propTypes = {};
