import React from 'react';
import PropTypes from 'prop-types';
import { MemberListElement } from '../../../../../MemberListElement/index';
import { Ul } from '../../../../../SharedComponents/styles';
import { MemberItem, MembersContainer } from './styles';

export const CollaboratorsList = ({ collaborators, closeDropDown = null }) => {
    return (
        <MembersContainer>
            <Ul className="list">
                {collaborators.map((collaborator, index) => (
                    <MemberItem
                        key={index}
                        id="member-item"
                        onClick={() => console.log('hello world')}
                    >
                        <MemberListElement member={collaborator} />
                    </MemberItem>
                ))}
            </Ul>
        </MembersContainer>
    );
};

CollaboratorsList.propTypes = {
    collaborators: PropTypes.array,
};
