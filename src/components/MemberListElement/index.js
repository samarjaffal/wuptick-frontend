import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '../Avatar/index';
import {
    Div,
    FlexSpaceBetween,
    FlexCenter,
    MemberEmail,
    MemberName,
} from './styles';

export const MemberListElement = ({ member, customProps }) => (
    <FlexCenter customProps={customProps}>
        <Avatar size={30} src={member.avatar} hide={false} user={member} />
        <Div customProps="margin-left: 0.5em;">
            <MemberName className="memberName">
                {member.name} {member.last_name}
            </MemberName>
            {member.email && (
                <MemberEmail className="memberEmail">
                    {member.email}
                </MemberEmail>
            )}
        </Div>
    </FlexCenter>
);
MemberListElement.propTypes = {
    member: PropTypes.object,
};
