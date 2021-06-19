import React, { useRef } from 'react';
import { LoggedLayout } from '../Layouts/LoggedLayout/index';
import { Info } from '../../components/Info/index';
import { ListContainer } from '../../components/ListContainer/index';
import { useUser } from '../../hooks/useUser';
import { useAvatar } from '../../hooks/useAvatar';
import { Me } from '../../components/Me/index';
import { Colors } from '../../assets/css/colors';
import { LastActivity } from '../../components/LastActivity/index';
import { SkeletonCardItem } from '../../components/Loaders/SkeletonCardItem/index';
import { ButtonHome } from '../../components/ButtonHome/index';
import { AddProjectModal } from '../../components/Modal/templates/AddProjectModal/index';
import { RecentProjects } from './RecentProjects';
import { CreateProjectMutation } from '../../requests/project/CreateProjectMutation';
import {
    Container,
    HeaderContainer,
    Wrapper,
    Title,
    ProjectsContainer,
    ActivityContainer,
} from './styles';

export const Home = () => {
    const { generateProfileUrl, generateProjectUrl } = useUser();
    const { generateProjectAvatar } = useAvatar({});
    const modalRef = useRef();


    return (
        <LoggedLayout>
            <Container>
                <HeaderContainer>
                    <Title>Activity </Title>
                    {false && (
                        <div>
                            <ButtonHome
                                url="/"
                                icon="plus"
                                color={Colors.primary}
                                onClicked={() => modalRef.current.openModal()}
                            >
                                New Project
                            </ButtonHome>
                            <ButtonHome
                                url="/"
                                icon="plus"
                                margin="0 0 0 1em"
                                color={Colors.orange}
                            >
                                New Team
                            </ButtonHome>
                            <ButtonHome
                                url="/"
                                icon="plus"
                                margin="0 0 0 1em"
                                color={Colors.yellow}
                            >
                                New Task
                            </ButtonHome>
                        </div>
                    )}

                </HeaderContainer>

                <Wrapper>
                    <ProjectsContainer>
                        <ListContainer
                            title="Favorite Projects"
                            icon="star"
                            color={Colors.yellow}
                        >
                            <Me
                                loader={SkeletonCardItem}
                                loaderProps={{ qty: 3 }}
                            >
                                {({ favorite_projects }) => {
                                    return favorite_projects.map((project) => (
                                        <Info
                                            name={project.name}
                                            profileUrl={generateProfileUrl(
                                                project.owner.name,
                                                project.owner.last_name,
                                                project.owner._id
                                            )}
                                            projectUrl={generateProjectUrl(
                                                project._id
                                            )}
                                            owner={`${project.owner.name} ${project.owner.last_name}`}
                                            time={project.created_at}
                                            image={generateProjectAvatar(
                                                project
                                            )}
                                            description="Favorite Project Avatar"
                                            key={project._id}
                                        />
                                    ));
                                }}
                            </Me>
                        </ListContainer>

                        <Me loader={SkeletonCardItem}>
                            {({ teams, loading }) => {
                                if (loading) {
                                    return 'loading...';
                                }
                                return <RecentProjects teams={teams} />
                            }}
                        </Me>

                    </ProjectsContainer>
                    <ActivityContainer>
                        <LastActivity />
                    </ActivityContainer>
                </Wrapper>
                <CreateProjectMutation modalRef={modalRef}>
                    {({ doCreateProject, loading }) => (
                        <AddProjectModal
                            modalRef={modalRef}
                            doFunction={doCreateProject}
                            loading={loading}
                        />
                    )}
                </CreateProjectMutation>
            </Container>
        </LoggedLayout>
    );
};
