import React from 'react';
import { navigate } from '@reach/router';
import { Avatar } from '../Avatar/index';
import { useUser } from '../../hooks/useUser';
import { MembersList as MembersListStyled, List } from './styles';

export const MembersList = ({ members = [] }) => {
    const { generateProfileUrl } = useUser();
    return (
        <MembersListStyled>
            <List>
                {members.map((member, index) => (
                    <li key={index}>
                        <Avatar
                            src={member.avatar}
                            margin="0 4px"
                            size={28}
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
            </List>
        </MembersListStyled>
    );
};
