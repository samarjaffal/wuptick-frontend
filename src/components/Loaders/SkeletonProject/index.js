import React from 'react';
import PropTypes from 'prop-types';
import { SkeletonMembers } from '../SkeletonMembers/index';
import { SkeletonModulesList } from '../SkeletonModulesList/index';
import {
    SkeletonStyled,
    Container,
    ProjectInfoContainer,
    ImageContainer,
    InfoContainer,
    MembersContainer,
    TabsContainer,
} from './styles';

export const SkeletonProject = () => {
    const TABS_COUNT = 4;

    return (
        <Container>
            <div>
                <ProjectInfoContainer>
                    <ImageContainer>
                        <SkeletonStyled w="100px" height={100} />
                    </ImageContainer>

                    <InfoContainer>
                        <SkeletonStyled w="40%" />
                        <div
                            style={{
                                margin: '1em 0',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <SkeletonStyled w="60%" />
                            <SkeletonStyled w="60%" />
                        </div>
                    </InfoContainer>
                </ProjectInfoContainer>
                <MembersContainer>
                    <SkeletonMembers quantity={6} size={28} />
                </MembersContainer>
            </div>
            <TabsContainer>
                {Array(TABS_COUNT)
                    .fill()
                    .map((tab, index) => (
                        <div key={index} style={{ marginRight: '1em' }}>
                            <SkeletonStyled w="80px" height={30} />
                        </div>
                    ))}
            </TabsContainer>
            <div className="ModulesList">
                <SkeletonModulesList quantity={5} />
            </div>
        </Container>
    );
};

SkeletonProject.propTypes = {};
