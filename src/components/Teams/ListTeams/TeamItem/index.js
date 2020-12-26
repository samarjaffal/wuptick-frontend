import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigate } from '@reach/router';
import { ListContainer } from '../../../ListContainer/index';
import { Avatar } from '../../../Avatar/index';
import { useDropdown } from '../../../../hooks/useDropdown';
import { useUser } from '../../../../hooks/useUser';
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

export const TeamItem = ({ team, userId, setTeamSelected }) => {
    const { generateProfileUrl, currentUser } = useUser();
    const { setPositionDropDown, openDropCallBack } = useDropdown();
    const elemRef = useRef(null);

    const handleDropDown = (value = null) => {
        value = value == null ? true : value;
        openDropCallBack(value);
        if (value) {
            setPositionDropDown(elemRef);
            setTeamSelected(team);
        }
    };

    return (
        <ListContainer hover={Colors.hover} cursor="pointer">
            <Container>
                <TeamContainer>
                    <Name to="/">{team.name}</Name>
                </TeamContainer>

                <MembersContainer>
                    <div className="MembersList" style={{ display: 'flex' }}>
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

TeamItem.propTypes = {
    team: PropTypes.object,
    userId: PropTypes.string,
    setTeamSelected: PropTypes.func,
};
