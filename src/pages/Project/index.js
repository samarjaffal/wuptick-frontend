import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { LoggedLayout } from '../Layouts/LoggedLayout/index';
import { GetProjectQuery } from '../../requests/project/getProjectQuery';
import { Image } from '../../components/Image/index';
import { Avatar } from '../../components/Avatar/index';
import { ButtonHome } from '../../components/ButtonHome/index';
import { Colors } from '../../assets/css/colors';
import {
    TabItem,
    Container,
    InfoContainer,
    ProjectInfoContainer,
    ProjectName,
    ProjectDescription,
    MembersContainer,
    MembersList,
} from './styles';

export const Project = ({ id, location }) => {
    const { tab } = queryString.parse(location.search);
    return (
        <LoggedLayout>
            <Helmet>
                <title>Wuptick - Project</title>
            </Helmet>
            <GetProjectQuery projectId={id}>
                {({ data }) => {
                    const { getProject: project } = data;
                    return (
                        <Container>
                            <ProjectInfoContainer>
                                <Image
                                    size={100}
                                    description="Project Image"
                                    src={project.image}
                                />
                                <InfoContainer>
                                    <ProjectName>
                                        {project.name || 'Add a project name'}
                                    </ProjectName>
                                    <ProjectDescription>
                                        {project.description ||
                                            'Add a new description'}
                                    </ProjectDescription>
                                </InfoContainer>
                            </ProjectInfoContainer>
                            <MembersContainer>
                                <MembersList>
                                    {Array(6)
                                        .fill()
                                        .map((item, index) => (
                                            <Avatar
                                                margin="0 4px"
                                                key={index}
                                                size={28}
                                            />
                                        ))}
                                </MembersList>
                                <ButtonHome
                                    url="/"
                                    icon="plus"
                                    color={Colors.primary}
                                    margin="0.5em 0 0 0.5em"
                                >
                                    Add
                                </ButtonHome>
                            </MembersContainer>

                            <div
                                className="TabsContainer"
                                style={{ marginTop: '1em' }}
                            >
                                <div className="Tabs">
                                    <nav>
                                        <TabItem
                                            to="/project/5ef7fe59db26218144f3f705"
                                            active={
                                                tab == undefined || null ? 1 : 0
                                            }
                                        >
                                            Modules
                                        </TabItem>
                                        <TabItem
                                            to="/project/5ef7fe59db26218144f3f705?tab=priority-tasks"
                                            active={
                                                tab == 'priority-tasks' ? 1 : 0
                                            }
                                        >
                                            Priority Tasks
                                        </TabItem>
                                        <TabItem
                                            to="/project/5ef7fe59db26218144f3f705?tab=topics"
                                            active={tab == 'topics' ? 1 : 0}
                                        >
                                            Topics
                                        </TabItem>
                                        <TabItem
                                            to="/project/5ef7fe59db26218144f3f705?tab=files"
                                            active={tab == 'files' ? 1 : 0}
                                        >
                                            Files
                                        </TabItem>
                                    </nav>
                                </div>
                            </div>
                        </Container>
                    );
                }}
            </GetProjectQuery>
        </LoggedLayout>
    );
};

Project.propTypes = {
    id: PropTypes.string,
};
