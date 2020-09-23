import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
export const TeamItem = ({ team }) => {
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
                                    />
                                )
                            );
                        })}
                    </div>
                    <ActionContainer>
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
                    </ActionContainer>
                </MembersContainer>
            </Container>
        </ListContainer>
    );
};
