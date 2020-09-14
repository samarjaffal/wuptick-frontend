import React from 'react';
import { Link } from '@reach/router';
import { ListContainer } from '../../ListContainer/index';
import { Image } from '../../Image/index';
import { Avatar } from '../../Avatar';
import { Colors } from '../../../assets/css/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Container,
    ProjectContainer,
    Name,
    ButtonContainer,
    OptionsButton,
} from './styles';

export const ProjectItem = ({ project }) => {
    return (
        <ListContainer hover={Colors.hover} cursor="pointer">
            <Container>
                <ProjectContainer>
                    <Image
                        size={28}
                        margin="0 1em 0 0"
                        description="Project Image"
                        src={project.image}
                    />
                    <Name to="/">{project.name}</Name>
                </ProjectContainer>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '50%',
                    }}
                >
                    <div className="MembersContainer">
                        <div
                            className="MembersList"
                            style={{ display: 'flex' }}
                        >
                            {project.members.map((member, index) => {
                                return (
                                    member.user !== null &&
                                    Object.keys(member.user).length > 0 && (
                                        <Avatar
                                            margin="0 4px"
                                            key={index}
                                            size={28}
                                            src={member.user.avatar}
                                        />
                                    )
                                );
                            })}
                        </div>
                    </div>

                    <div
                        className="ActionContainer"
                        style={{
                            display: 'flex',
                            justifyItems: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <ButtonContainer>
                            {/*   <Button
                                to="/"
                                bg={Colors.whitePrimary}
                                color={Colors.gray}
                                padding="8px 10px"
                                margin="0 1em 0 0"
                            >
                                <FontAwesomeIcon icon="edit" />
                            </Button>
                            <Button
                                to="/"
                                bg={Colors.whitePrimary}
                                color={Colors.red}
                                padding="8px 10px"
                            >
                                <FontAwesomeIcon icon="trash-alt" />
                            </Button> */}
                            <OptionsButton
                                onClick={() => console.log('clicked')}
                            >
                                <FontAwesomeIcon
                                    icon="ellipsis-h"
                                    color={Colors.gray}
                                />
                            </OptionsButton>
                        </ButtonContainer>
                    </div>
                </div>
            </Container>
        </ListContainer>
    );
};
