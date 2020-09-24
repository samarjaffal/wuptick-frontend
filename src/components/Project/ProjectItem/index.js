import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import PropTypes from 'prop-types';
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

                            <div>
                                <Name to="/">{project.name}</Name>
                                <Details>
                                    Owner:{' '}
                                    {`${project.owner.name} ${project.owner.last_name}`}
                                </Details>
                                <Details>
                                    <Clock icon="clock" />
                                    {dayjs(date.format()).fromNow() ||
                                        'No time...'}
                                </Details>
                            </div>
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
                            </div>
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
