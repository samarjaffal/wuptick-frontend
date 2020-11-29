import React, { useRef } from 'react';
import { navigate } from '@reach/router';
import { Avatar } from '../Avatar/index';
import { useUser } from '../../hooks/useUser';
import { ButtonHome } from '../ButtonHome/index';
import { MemberModal } from '../Modal/templates/MembersModal/index';
import { Colors } from '../../assets/css/colors';
import { MembersList as MembersListStyled, List } from './styles';

export const MembersList = ({ members = [] }) => {
    const { generateProfileUrl } = useUser();
    const modalRef = useRef();
    return (
        <MembersListStyled>
            <List>
                {members.map((member, index) => (
                    <li key={index}>
                        <Avatar
                            src={member.avatar}
                            margin="0 4px"
                            size={28}
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
                    </li>
                ))}
                <ButtonHome
                    url=""
                    icon="plus"
                    color={Colors.primary}
                    onClicked={() => modalRef.current.openModal()}
                >
                    Add
                </ButtonHome>
            </List>
            <MemberModal modalRef={modalRef} />
        </MembersListStyled>
    );
};
