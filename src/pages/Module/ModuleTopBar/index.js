import React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Title,
    TitleContainer,
    RightItemsContainer,
    Filter,
    InputSearch,
} from './styles';

export const ModuleTopBar = ({ module }) => {
    return (
        <Container>
            <TitleContainer>
                <Title>{module.name}</Title>
            </TitleContainer>

            <RightItemsContainer>
                <div>
                    <Filter>Filter</Filter>
                </div>
                <InputSearch type="text" placeholder="Search" />
            </RightItemsContainer>
        </Container>
    );
};

ModuleTopBar.propTypes = {
    module: PropTypes.object,
};
