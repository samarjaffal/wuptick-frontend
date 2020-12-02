import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../../index';
import { useUser } from '../../../../hooks/useUser';
import { Subtitle } from './styles';

export const TeamMembersModal = ({ team, modalRef }) => {
    const [members, setMembers] = useState(team.members);

    useEffect(() => {
        if (Object.keys(team).length > 0) {
            setMembers(team.members);
        }
    }, [team.members]);

    return (
        <Modal ref={modalRef} title={`${team ? `${team.name}` : ''}`}>
            <Subtitle>Current members</Subtitle>
            {/*  <Div customProps="max-height: 220px; overflow-y: auto;">
            <DropdownContextProvider>
                {handleMembersList()}
            </DropdownContextProvider>
        </Div> */}
        </Modal>
    );
};

TeamMembersModal.propTypes = {
    team: PropTypes.object,
};
