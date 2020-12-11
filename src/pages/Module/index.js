import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { LoggedLayout } from '../Layouts/LoggedLayout/index';
import { Div, FlexCenter } from '../../components/SharedComponents/styles';
import {
    TopContainer,
    RightItemsContainer,
    Title,
    Filter,
    InputSearch,
} from './styles';
export const Module = () => {
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
                </div>
            </div>
        </LoggedLayout>
    );
};

Module.propTypes = {};
