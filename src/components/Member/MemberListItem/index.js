import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '../../Avatar/index';
import { Div, FlexCenter } from '../../SharedComponents/styles';
import { MemberEmail, MemberName } from './styles';

export const MemberListItem = ({ member }) => {
    return (
        <FlexCenter customProps="margin-bottom: 0.5em;">
            <Avatar size={30} src={member.avatar} hide={false} />
            <Div customProps="margin-left: 0.5em;">
                <MemberName>
                    {member.name} {member.last_name}
                </MemberName>
                <MemberEmail>{member.email}</MemberEmail>
            </Div>
        </FlexCenter>
    );
};

MemberListItem.propTypes = {
    member: PropTypes.object,
};
