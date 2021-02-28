import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MemberListElement } from '../../../../../MemberListElement/index';
import { RemoveCollaboratorMutation } from '../../../../../../requests/Task/RemoveCollaboratorMutation';
import { AddCollaboratorMutation } from '../../../../../../requests/Task/AddCollaboratorMutation';
import { useUser } from '../../../../../../hooks/useUser';
import { Ul } from '../../../../../SharedComponents/styles';
import {
    MemberItem,
    MembersContainer,
    RemoveButton,
    AddButton,
} from './styles';

export const CollaboratorsList = ({
    collaborators,
    pivot,
    closeDropDown = null,
}) => {
    const { currentTask } = useUser();

    const removeCollaborator = (doRemoveCollaborator) => {
        doRemoveCollaborator();
        closeDropDown();
    };

    const addCollaborator = (doAddCollaborator) => {
        doAddCollaborator();
        closeDropDown();
    };

    return (
        <MembersContainer>
            <Ul className="list">
                {pivot == 'collaborators'
                    ? collaborators.map((collaborator, index) => (
                          <MemberItem key={index} id="member-item">
                              <MemberListElement member={collaborator} />
                              <RemoveCollaboratorMutation>
                                  {({ doRemoveCollaborator }) => (
                                      <RemoveButton
                                          onClick={() =>
                                              removeCollaborator(() => {
                                                  doRemoveCollaborator(
                                                      currentTask._id,
                                                      collaborator._id
                                                  );
                                              })
                                          }
                                      >
                                          <FontAwesomeIcon icon="times" />
                                      </RemoveButton>
                                  )}
                              </RemoveCollaboratorMutation>
                          </MemberItem>
                      ))
                    : collaborators.map((collaborator, index) => (
                          <MemberItem key={index} id="member-item">
                              <MemberListElement member={collaborator} />
                              <AddCollaboratorMutation>
                                  {({ doAddCollaborator }) => (
                                      <AddButton
                                          onClick={() =>
                                              addCollaborator(() =>
                                                  doAddCollaborator(
                                                      currentTask._id,
                                                      collaborator._id
                                                  )
                                              )
                                          }
                                      >
                                          <FontAwesomeIcon icon="plus" /> Add
                                      </AddButton>
                                  )}
                              </AddCollaboratorMutation>
                          </MemberItem>
                      ))}
            </Ul>
        </MembersContainer>
    );
};

CollaboratorsList.propTypes = {
    collaborators: PropTypes.array,
    closeDropDown: PropTypes.func,
    pivot: PropTypes.string,
};
