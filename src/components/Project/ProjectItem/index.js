import React from 'react';
import { Link } from '@reach/router';
import { ListContainer } from '../../ListContainer/index';
import { Image } from '../../Image/index';
import { Avatar } from '../../Avatar';
import { Colors } from '../../../assets/css/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
    Container,
    ProjectContainer,
    MembersContainer,
    Name,
    ButtonContainer,
    OptionsButton,
    Details,
    Clock,
} from './styles';
import PropTypes from 'prop-types';

export const ProjectItem = ({ project }) => {
    let date = dayjs(project.created_at);
    dayjs.extend(relativeTime);

    return (
        <ListContainer hover={Colors.hover} cursor="pointer">
            <Container>
                <ProjectContainer>
                    <div>
                        <Image
                            size={50}
                            margin="0 1em 0 0"
                            description="Project Image"
                            src={project.image}
                        />
                    </div>

                    <div>
                        <Name to="/">{project.name}</Name>
                        <Details>
                            Owner:{' '}
                            {`${project.owner.name} ${project.owner.last_name}`}
                        </Details>
                        <Details>
                            <Clock icon="clock" />
                            {dayjs(date.format()).fromNow() || 'No time...'}
                        </Details>
                    </div>
                </ProjectContainer>
                <MembersContainer>
                    <div className="MembersList" style={{ display: 'flex' }}>
                        {project.members.map((member, index) => {
                            return (
                                member.user !== null &&
                                Object.keys(member.user).length > 0 && (
                                    <Avatar
                                        margin="0 4px"
                                        key={index}
                                        size={28}
                                        src={member.user.avatar}
                                        hide={false}
                                    />
                                )
                            );
                        })}
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
                </MembersContainer>
            </Container>
        </ListContainer>
    );
};

ProjectItem.propTypes = {
    project: PropTypes.object,
};
