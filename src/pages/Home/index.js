import React from 'react';
import {
    Container,
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
export const Home = () => {
    const { teamSelected } = useUser();
    return (
        <Container>
            <Title>Activity</Title>
            <Wrapper>
                <ProjectsContainer>
                    <ListContainer
                        title="Favorite Projects"
                        icon="star"
                        color={Colors.yellow}
                    >
                        <Me>
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
                        <Me>
                            {({ teams }) => {
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
                    <ListContainer title="Activity">
                        <Me>
                            {({ teams }) => {
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
                </ActivityContainer>
            </Wrapper>
        </Container>
    );
};
