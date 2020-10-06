import React from 'react';
import { Avatar } from '../Avatar/index';
import { MembersList as MembersListStyled, List } from './styles';

export const MembersList = () => {
    return (
        <MembersListStyled>
            <List>
                {Array(6)
                    .fill()
                    .map((item, index) => (
                        <li key={index}>
                            <Avatar margin="0 4px" size={28} />
                        </li>
                    ))}
            </List>
        </MembersListStyled>
    );
};
