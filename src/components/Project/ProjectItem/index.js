import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import { ListContainer } from '../../ListContainer/index';
import { Image } from '../../Image/index';
import { Avatar } from '../../Avatar';
import { Colors } from '../../../assets/css/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from '../../Dropdrown/index';
import { DropdownMenu } from '../../DropdownMenu/index';
import { DropdownItem } from '../../DropdownItem/index';
import { DropdownContextProvider } from '../../../context/DropdownContext';
import { RemoveMemberMutation } from '../../../requests/project/RemoveMemberMutation';
import { OutsideClick } from '../../OutsideClick/index';
import { useDropdown } from '../../../hooks/useDropdown';
import { useUser } from '../../../hooks/useUser';
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

const ProjectDropDown = ({ openDrop, projectId, teamId, openDeleteModal }) => {
    const { open, setOpen } = useDropdown();
    const { generateProjectUrl, currentUser } = useUser();
    useEffect(() => {
        setOpen(openDrop);
    }, [openDrop]);

    return (
        <Dropdown open={open} transform="-91%" width="200px" top="46px">
            <DropdownMenu menu="main" classMenu="menu-primary">
                <DropdownItem
                    leftIcon={<FontAwesomeIcon icon="edit" />}
                    onClicked={() => navigate(generateProjectUrl(projectId))}
                >
                    Edit
                </DropdownItem>
                <RemoveMemberMutation>
                    {({ doRemoveMember }) => (
                        <DropdownItem
                            leftIcon={<FontAwesomeIcon icon="sign-out-alt" />}
                            onClicked={() =>
                                doRemoveMember(projectId, currentUser._id)
                            }
                        >
                            Leave Project
                        </DropdownItem>
                    )}
                </RemoveMemberMutation>

                <DropdownItem
                    leftIcon={<FontAwesomeIcon icon="trash-alt" />}
                    onClicked={() => openDeleteModal()}
                >
                    Delete
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export const ProjectItem = ({
    project,
    userId,
    teamId,
    openDeleteModal,
    setProjectAndTeam,
}) => {
    const [openDropDown, setOpenDropDown] = useState(false);
    const { generateProfileUrl, generateProjectUrl, currentUser } = useUser();

    const handleDropDown = (value) => {
        setOpenDropDown(value);
    };

    let date = dayjs(project.created_at);
    dayjs.extend(relativeTime);

    return (
        <DropdownContextProvider>
            <OutsideClick setLocalDropDownState={handleDropDown}>
                <ListContainer hover={Colors.hover} cursor="pointer">
                    <Container>
                        <ProjectContainer>
                            <div>
                                <Image
                                    size={50}
                                    margin="0 1em 0 0"
                                    description="Project Image"
                                    src={project.image}
                                    onClicked={() =>
                                        navigate(
                                            generateProjectUrl(project._id)
                                        )
                                    }
                                />
                            </div>

                            <DetailsContainer>
                                <Name to={generateProjectUrl(project._id)}>
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
                                    {dayjs(date.format()).fromNow() ||
                                        'No time...'}
                                </Details>
                            </DetailsContainer>
                        </ProjectContainer>
                        <MembersContainer>
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
                                                hide={false}
                                                onClicked={() =>
                                                    navigate(
                                                        generateProfileUrl(
                                                            member.user.name,
                                                            member.user
                                                                .last_name,
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
                                            onClick={() => {
                                                setOpenDropDown(!openDropDown);
                                                setProjectAndTeam(
                                                    project,
                                                    teamId
                                                );
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                icon="ellipsis-h"
                                                color={Colors.gray}
                                            />
                                        </OptionsButton>
                                    </ButtonContainer>
                                    <ProjectDropDown
                                        openDrop={openDropDown}
                                        projectId={project._id}
                                        teamId={teamId}
                                        openDeleteModal={openDeleteModal}
                                    />
                                </ActionContainer>
                            )}
                        </MembersContainer>
                    </Container>
                </ListContainer>
            </OutsideClick>
        </DropdownContextProvider>
    );
};

ProjectItem.propTypes = {
    project: PropTypes.object,
    userId: PropTypes.string,
};

ProjectDropDown.propTypes = {
    openDrop: PropTypes.bool,
};
