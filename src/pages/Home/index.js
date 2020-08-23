import React from 'react';
import { Container, Title, ProjectsContainer } from './styles';
import { Info } from '../../components/Info/index';
import { ListContainer } from '../../components/ListContainer/index';
import { useUser } from '../../hooks/useUser';
import { Me } from '../../components/Me/index';
export const Home = () => {
    const { teamSelected } = useUser();
    return (
        <Container>
            <Title>Home</Title>
            <ProjectsContainer>
                <ListContainer title="Recent Projects" icon="star">
                    <Me>
                        {({ teams }) => {
                            return teams
                                .filter((team) => team._id == teamSelected._id)
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
        </Container>
    );
};
