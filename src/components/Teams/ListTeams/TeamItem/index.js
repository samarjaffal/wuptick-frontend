import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigate } from '@reach/router';
import { useUser } from '../../../../hooks/useUser';
import { Dropdown } from '../../../Dropdrown/styles';
import { DropdownMenu } from '../../../DropdownMenu/index';
import { DropdownItem } from '../../../DropdownItem/index';
import { DropdownContextProvider } from '../../../../context/DropdownContext';
import { useDropdown } from '../../../../hooks/useDropdown';
import { OutsideClick } from '../../../OutsideClick/index';
import { ListContainer } from '../../../ListContainer/index';
import { Avatar } from '../../../Avatar/index';
import { Colors } from '../../../../assets/css/colors';
import {
    Container,
    Name,
    ActionContainer,
    ButtonContainer,
    MembersContainer,
    TeamContainer,
    OptionsButton,
} from './styles';

const TeamDropDown = ({ openDrop }) => {
    const { open, setOpen } = useDropdown();

    useEffect(() => {
        setOpen(openDrop);
    }, [openDrop]);

    return (
        <Dropdown open={open} transform="-91%" width="200px" top="30px">
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

export const TeamItem = ({ team }) => {
    const [openDropDown, setOpenDropDown] = useState(false);
    const { generateProfileUrl } = useUser();
    return (
        <DropdownContextProvider>
            <OutsideClick>
                <ListContainer hover={Colors.hover} cursor="pointer">
                    <Container>
                        <TeamContainer>
                            <Name to="/">{team.name}</Name>
                        </TeamContainer>

                        <MembersContainer>
                            <div
                                className="MembersList"
                                style={{ display: 'flex' }}
                            >
                                {team.members.map((member, index) => {
                                    return (
                                        member.user !== null &&
                                        Object.keys(member).length > 0 && (
                                            <Avatar
                                                margin="0 4px"
                                                key={index}
                                                size={28}
                                                src={member.avatar}
                                                hide={false}
                                                onClicked={() =>
                                                    navigate(
                                                        generateProfileUrl(
                                                            member.name,
                                                            member.last_name,
                                                            member._id
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
                                <TeamDropDown openDrop={openDropDown} />
                            </ActionContainer>
                        </MembersContainer>
                    </Container>
                </ListContainer>
            </OutsideClick>
        </DropdownContextProvider>
    );
};
