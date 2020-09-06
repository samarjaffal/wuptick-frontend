import React from 'react';
import {
    Container,
    HeaderContainer,
    Wrapper,
    Title,
    ProjectsContainer,
    ActivityContainer,
} from './styles';
import { Info } from '../../components/Info/index';
import { ListContainer } from '../../components/ListContainer/index';
import { useUser } from '../../hooks/useUser';
import { Me } from '../../components/Me/index';
import { Colors } from '../../assets/css/colors';
import { LastActivity } from '../../components/LastActivity/index';
import { SkeletonCardItem } from '../../components/Loaders/SkeletonCardItem/index';
import { ButtonHome } from '../../components/ButtonHome/index';
export const Home = () => {
    const { teamSelected } = useUser();
    return (
        <Container>
            <HeaderContainer>
                <Title>Activity </Title>
                <div>
                    <ButtonHome url="/" icon="plus" color={Colors.primary}>
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
            </HeaderContainer>

            <Wrapper>
                <ProjectsContainer>
                    <ListContainer
                        title="Favorite Projects"
                        icon="star"
                        color={Colors.yellow}
                    >
                        <Me loader={SkeletonCardItem} loaderProps={{ qty: 3 }}>
                            {({ favorite_projects }) => {
                                return favorite_projects.map((project) => (
                                    <Info
                                        name={project.name}
                                        owner={`${project.owner.name} ${project.owner.last_name}`}
                                        time={project.created_at}
                                        image={project.image}
                                        description="Favorite Project Avatar"
                                        key={project._id}
                                    />
                                ));
                            }}
                        </Me>
                    </ListContainer>
                    <ListContainer
                        title="Recent Projects"
                        icon="folder-open"
                        color={Colors.primary}
                        button={true}
                    >
                        <Me loader={SkeletonCardItem}>
                            {({ teams, loading }) => {
                                if (loading) {
                                    return 'loading...';
                                }

                                return teams
                                    .filter(
                                        (team) => team._id == teamSelected._id
                                    )
                                    .map(({ projects }) =>
                                        projects.map((project) => (
                                            <Info
                                                name={project.name}
                                                owner={`${project.owner.name} ${project.owner.last_name}`}
                                                time={project.created_at}
                                                image={project.image}
                                                description="Project Avatar"
                                                key={project._id}
                                            />
                                        ))
                                    );
                            }}
                        </Me>
                    </ListContainer>
                </ProjectsContainer>
                <ActivityContainer>
                    <LastActivity />
                </ActivityContainer>
            </Wrapper>
        </Container>
    );
};
