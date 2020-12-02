import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigate } from '@reach/router';
import { TeamDropDown } from '../../TeamDropDown/index';
import { useUser } from '../../../../hooks/useUser';
import { DropdownContextProvider } from '../../../../context/DropdownContext';
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

export const TeamItem = ({ team, userId }) => {
    const [openDropDown, setOpenDropDown] = useState(false);
    const { generateProfileUrl, currentUser } = useUser();
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
                            {currentUser._id == userId && (
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
                            )}
                        </MembersContainer>
                    </Container>
                </ListContainer>
            </OutsideClick>
        </DropdownContextProvider>
    );
};

TeamItem.propTypes = {
    team: PropTypes.object,
};
