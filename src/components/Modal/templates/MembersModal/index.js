import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '../../../Avatar/index';
import { Modal } from '../../index';
import { RolesSelect } from '../../../RolesSelect/index';
import { useUser } from '../../../../hooks/useUser';
import { Label } from '../../../Label/index';
import { MembersInputSearch } from '../../../InputSearch/MembersInputSearch/index';
import { UpdateMemberRoleMutation } from '../../../../requests/project/UpdateMemberRoleMutation';
import { GetInvitationsForProjectQuery } from '../../../../requests/project/GetInvitationsForProjectQuery';
import { RegisterUserByInvitationMutation } from '../../../../requests/User/RegisterUserByInvitationMutation';
import { Colors } from '../../../../assets/css/colors';
import {
    Div,
    FlexSpaceBetween,
    FlexCenter,
    Subtitle,
    MemberName,
    MemberEmail,
    Empty,
    Hr,
    Ul,
    SmallMessage,
} from './styles';

const MembersList = ({ members }) => {
    const { currentProject } = useUser();
    return (
        <Ul>
            {members.map((member, index) => (
                <li key={index}>
                    <FlexSpaceBetween customProps="position: relative">
                        <FlexCenter customProps="margin-bottom: 0.5em;">
                            <Avatar size={30} src={member.user.avatar} />
                            <Div customProps="margin-left: 0.5em;">
                                <MemberName>
                                    {member.user.name} {member.user.last_name}
                                </MemberName>
                                <MemberEmail>{member.user.email}</MemberEmail>
                            </Div>
                        </FlexCenter>

                        <Div>
                            <UpdateMemberRoleMutation>
                                {({ doUpdateRole }) => (
                                    <RolesSelect
                                        role={member.role}
                                        doUpdate={doUpdateRole}
                                        projectId={currentProject._id}
                                        userId={member.user._id}
                                    />
                                )}
                            </UpdateMemberRoleMutation>
                        </Div>
                    </FlexSpaceBetween>
                </li>
            ))}
        </Ul>
    );
};

const InvitationList = ({ members }) => {
    return (
        <Ul>
            {members.map((member, index) => (
                <li key={index}>
                    <FlexSpaceBetween customProps="position: relative;">
                        <FlexCenter customProps="margin-bottom: 0.5em;">
                            <Avatar size={30} />
                            <Div customProps="margin-left: 0.5em;">
                                <MemberName>{member.email}</MemberName>
                                <MemberEmail>{member.email}</MemberEmail>
                            </Div>
                        </FlexCenter>

                        <Div>
                            <Label
                                name="Invitation Sent"
                                color={Colors.yellow}
                                showCaret={true}
                                width="max-content"
                            />
                        </Div>
                    </FlexSpaceBetween>
                </li>
            ))}
        </Ul>
    );
};

export const MemberModal = ({ modalRef }) => {
    const { currentProject } = useUser();
    const [members, setMembers] = useState([]);

    const handleMembersList = () => {
        if (members.length > 0) {
            return <MembersList members={members} />;
        } else {
            return (
                <Empty>
                    You don&apos;t have members in this project yet. Let&apos;s
                    invite someone to your project sending an email with the
                    form below.
                </Empty>
            );
        }
    };

    useEffect(() => {
        if (Object.keys(currentProject).length > 0) {
            setMembers(currentProject.members);
        }
    }, [currentProject, members]);

    return (
        <Modal
            ref={modalRef}
            title={`${currentProject ? `${currentProject.name}:` : ''} Members`}
        >
            <Subtitle>Current members of the project</Subtitle>
            <Div customProps="max-height: 220px; overflow-y: auto;">
                {handleMembersList()}
                <Hr />
                <Div customProps="margin-top:0.5em;">
                    <GetInvitationsForProjectQuery
                        projectId={currentProject._id}
                    >
                        {({ data }) => {
                            const {
                                getInvitationsForProject: invitations,
                            } = data;
                            return <InvitationList members={invitations} />;
                        }}
                    </GetInvitationsForProjectQuery>
                </Div>
            </Div>

            <Div>
                <Subtitle>Invite members to your project</Subtitle>
                <RegisterUserByInvitationMutation>
                    {({ doRegisterInvitation }) => (
                        <>
                            <MembersInputSearch
                                doInvitation={doRegisterInvitation}
                                setMembers={setMembers}
                            />
                            <Div customProps="width:100%; padding: 0 0.5em;">
                                <SmallMessage>
                                    If you don&apos;t see any suggestions, press
                                    enter to create a new invitation
                                </SmallMessage>
                            </Div>
                        </>
                    )}
                </RegisterUserByInvitationMutation>
            </Div>
        </Modal>
    );
};

MemberModal.propTypes = {
    modalRef: PropTypes.any,
};

InvitationList.propTypes = {
    members: PropTypes.object,
};

MembersList.propTypes = {
    members: PropTypes.object,
};
