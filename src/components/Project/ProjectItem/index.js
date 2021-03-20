import React, { useState, useRef } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import { ListContainer } from '../../ListContainer/index';
import { Image } from '../../Image/index';
import { Avatar } from '../../Avatar';
import { Colors } from '../../../assets/css/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useUser } from '../../../hooks/useUser';
import { useDropdown } from '../../../hooks/useDropdown';
import {
    Container,
    ProjectContainer,
    MembersContainer,
    Name,
    ButtonContainer,
    ActionContainer,
    DetailsContainer,
    OptionsButton,
    Details,
    OwnerAnchor,
    Clock,
} from './styles';

export const ProjectItem = ({
    project,
    userId,
    team,
    openDeleteModal,
    openAddProjectModal,
    setProjectAndTeam,
}) => {
    const [openDropDown, setOpenDropDown] = useState(false);
    const { generateProfileUrl, currentUser, goToProject } = useUser();
    const { setPositionDropDown, openDropCallBack } = useDropdown();
    const elemRef = useRef(null);

    const handleDropDown = (value = null) => {
        value = value == null ? true : value;
        openDropCallBack(value);
        if (value) {
            setPositionDropDown(elemRef);
            setProjectAndTeam(project, team._id);
        }
    };

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
                            onClicked={() => goToProject(team, project._id)}
                        />
                    </div>

                    <DetailsContainer>
                        <Name onClick={() => goToProject(team, project._id)}>
                            {project.name}
                        </Name>
                        <OwnerAnchor
                            to={generateProfileUrl(
                                project.owner.name,
                                project.owner.last_name,
                                project.owner._id
                            )}
                        >
                            Owner:{' '}
                            <span
                                style={{ color: Colors.primary }}
                            >{`${project.owner.name} ${project.owner.last_name}`}</span>
                        </OwnerAnchor>
                        <Details>
                            <Clock icon="clock" />
                            {dayjs(date.format()).fromNow() || 'No time...'}
                        </Details>
                    </DetailsContainer>
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
                                        onClicked={() =>
                                            navigate(
                                                generateProfileUrl(
                                                    member.user.name,
                                                    member.user.last_name,
                                                    member.user._id
                                                )
                                            )
                                        }
                                    />
                                )
                            );
                        })}
                    </div>
                    {currentUser._id == userId && (
                        <ActionContainer>
                            <ButtonContainer>
                                <OptionsButton
                                    ref={elemRef}
                                    onClick={() => handleDropDown()}
                                >
                                    <FontAwesomeIcon
                                        icon="ellipsis-h"
                                        color={Colors.gray}
                                    />
                                </OptionsButton>
                            </ButtonContainer>
                        </ActionContainer>
                    )}
                </MembersContainer>
            </Container>
        </ListContainer>
    );
};

ProjectItem.propTypes = {
    project: PropTypes.object,
    userId: PropTypes.string,
    team: PropTypes.object,
    setProjectAndTeam: PropTypes.func,
    openDeleteModal: PropTypes.func,
};
