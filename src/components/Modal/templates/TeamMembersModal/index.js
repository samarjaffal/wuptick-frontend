import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../../index';
import { MembersList } from './MembersList';
import { useUser } from '../../../../hooks/useUser';
import { RemoveMemberFromTeamMutation } from '../../../../requests/Team/RemoveMemberFromTeamMutation';
import { Div } from '../../../SharedComponents/styles';
import { Subtitle, Empty, MembersContainer } from './styles';

export const TeamMembersModal = ({ team, modalRef }) => {
    const [members, setMembers] = useState(team.members);

    const handleMembersList = () => {
        if (members) {
            return (
                <RemoveMemberFromTeamMutation modalRef={modalRef}>
                    {({ doRemoveMember, loading }) => (
                        <MembersList
                            members={members}
                            doRemoveMember={doRemoveMember}
                            loading={loading}
                            team={team}
                        />
                    )}
                </RemoveMemberFromTeamMutation>
            );
        } else {
            return <Empty>You don&apos;t have members in this team yet.</Empty>;
        }
    };

    useEffect(() => {
        if (Object.keys(team).length > 0) {
            setMembers(team.members);
        }
    }, [team]);

    return (
        <Modal ref={modalRef} title={`${team ? `${team.name}` : ''}`}>
            <Subtitle>Current members</Subtitle>
            <MembersContainer>{handleMembersList()}</MembersContainer>
        </Modal>
    );
};

TeamMembersModal.propTypes = {
    team: PropTypes.object,
    modalRef: PropTypes.any,
};
