import React from 'react';
import { Info } from '../../components/Info/index';
import { ListContainer } from '../../components/ListContainer/index';
import { useUser } from '../../hooks/useUser';
import { Me } from '../../components/Me/index';
export const Home = () => {
    const { teamSelected } = useUser();
    return (
        <div
            style={{
                paddingTop: '48px',
                marginLeft: '1em',
                marginRight: '1em',
            }}
        >
            <h1>Home</h1>
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
                                        key={project._id}
                                    />
                                ))
                            );
                    }}
                </Me>
            </ListContainer>
        </div>
    );
};
