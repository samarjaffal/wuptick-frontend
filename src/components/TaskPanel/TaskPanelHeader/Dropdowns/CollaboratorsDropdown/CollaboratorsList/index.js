import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MemberListElement } from '../../../../../MemberListElement/index';
import { RemoveCollaboratorMutation } from '../../../../../../requests/Task/RemoveCollaboratorMutation';
import { useUser } from '../../../../../../hooks/useUser';
import { Ul } from '../../../../../SharedComponents/styles';
import { MemberItem, MembersContainer, RemoveButton } from './styles';

export const CollaboratorsList = ({ collaborators, closeDropDown = null }) => {
    const { currentTask } = useUser();

    const removeCollaborator = (doRemoveCollaborator) => {
        doRemoveCollaborator();
        closeDropDown();
    };

    return (
        <MembersContainer>
            <Ul className="list">
                {collaborators.map((collaborator, index) => (
                    <MemberItem key={index} id="member-item">
                        <MemberListElement member={collaborator} />
                        <RemoveCollaboratorMutation>
                            {({ doRemoveCollaborator }) => (
                                <RemoveButton>
                                    <FontAwesomeIcon
                                        icon="times"
                                        onClick={() =>
                                            removeCollaborator(() => {
                                                doRemoveCollaborator(
                                                    currentTask._id,
                                                    collaborator._id
                                                );
                                            })
                                        }
                                    />
                                </RemoveButton>
                            )}
                        </RemoveCollaboratorMutation>
                    </MemberItem>
                ))}
            </Ul>
        </MembersContainer>
    );
};

CollaboratorsList.propTypes = {
    collaborators: PropTypes.array,
    closeDropDown: PropTypes.func,
};
