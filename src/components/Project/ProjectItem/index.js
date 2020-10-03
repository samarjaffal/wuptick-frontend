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
import { Dropdown } from '../../Dropdrown/styles';
import { DropdownMenu } from '../../DropdownMenu/index';
import { DropdownItem } from '../../DropdownItem/index';
import { DropdownContextProvider } from '../../../context/DropdownContext';
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

const ProjectDropDown = ({ openDrop }) => {
    const { open, setOpen } = useDropdown();

    useEffect(() => {
        setOpen(openDrop);
    }, [openDrop]);

    return (
        <Dropdown open={open} transform="-91%" width="200px">
            <DropdownMenu menu="main" classMenu="menu-primary">
                <DropdownItem
                    leftIcon={<FontAwesomeIcon icon="edit" />}
                    onClicked={() => console.log('clicked 1')}
                >
                    Edit
                </DropdownItem>
                <DropdownItem
                    leftIcon={<FontAwesomeIcon icon="sign-out-alt" />}
                    onClicked={() => console.log('clicked 2')}
                >
                    Leave Project
                </DropdownItem>
                <DropdownItem
                    leftIcon={<FontAwesomeIcon icon="trash-alt" />}
                    onClicked={() => console.log('clicked 3')}
                >
                    Delete
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export const ProjectItem = ({ project }) => {
    const [openDropDown, setOpenDropDown] = useState(false);
    const { generateProfileUrl } = useUser();

    let date = dayjs(project.created_at);
    dayjs.extend(relativeTime);

    return (
        <DropdownContextProvider>
            <OutsideClick>
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

                            <DetailsContainer>
                                <Name to="/">{project.name}</Name>
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

                            <ActionContainer>
                                <ButtonContainer>
                                    <OptionsButton
                                        onClick={() =>
                                            setOpenDropDown(!openDropDown)
                                        }
                                    >
                                        <FontAwesomeIcon
                                            icon="ellipsis-h"
                                            color={Colors.gray}
                                        />
                                    </OptionsButton>
                                </ButtonContainer>
                                <ProjectDropDown openDrop={openDropDown} />
                            </ActionContainer>
                        </MembersContainer>
                    </Container>
                </ListContainer>
            </OutsideClick>
        </DropdownContextProvider>
    );
};

ProjectItem.propTypes = {
    project: PropTypes.object,
};
