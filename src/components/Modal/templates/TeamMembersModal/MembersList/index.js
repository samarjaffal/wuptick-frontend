import React from 'react';
import PropTypes from 'prop-types';
import { MemberListItem } from '../../../../Member/MemberListItem/index';
import { Ul, Div } from '../../../../SharedComponents/styles';
import { RemoveButton, MemberContainer } from './styles';

export const MembersList = ({ team, members, doRemoveMember, loading }) => {
    const handleClick = (memberId) => {
        return !loading ? doRemoveMember(team._id, memberId) : null;
    };

    return (
        <Ul>
            {members.map((member, index) => (
                <li key={index}>
                    <MemberContainer>
                        <MemberListItem member={member} />
                        <Div onClick={() => handleClick(member._id)}>
                            <RemoveButton>
                                {loading ? 'Loading...' : 'Remove'}
                            </RemoveButton>
                        </Div>
                    </MemberContainer>
                </li>
            ))}
        </Ul>
    );
};

MembersList.propTypes = {
    members: PropTypes.array,
    team: PropTypes.object,
    doRemoveMember: PropTypes.func,
    loading: PropTypes.bool,
};
