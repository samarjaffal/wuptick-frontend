import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import { Avatar } from '../../../Avatar/index';
import { Modal } from '../../index';
import { RolesSelect } from '../../../RolesSelect/index';
import { useUser } from '../../../../hooks/useUser';
import { useDropdown } from '../../../../hooks/useDropdown';
import { InvitationSelect } from '../../../Selects/InvitationSelect/index';
import { MembersInputSearch } from '../../../InputSearch/MembersInputSearch/index';
import { OptionsDropDown as RoleDropDown } from '../../../RolesSelect/OptionsDropDown/index';
import { OptionsDropDown as InvitationDropDown } from '../../../Selects/InvitationSelect/OptionsDropDown/index';
import { DropdownContextProvider } from '../../../../context/DropdownContext';
import { UpdateMemberRoleMutation } from '../../../../requests/project/UpdateMemberRoleMutation';
import { RemoveMemberMutation } from '../../../../requests/project/RemoveMemberMutation';
import { RemoveInvitationMutation } from '../../../../requests/project/RemoveInvitationMutation';
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
    const [_members, setMembers] = useState([]);
    const [selectedUser, setSelectedUser] = useState();
    const { currentProject } = useUser();
    const {
        setRef,
        currentElemRef,
        setPositionDropDown,
        openDropCallBack,
    } = useDropdown();

    useEffect(() => {
        setMembers(members);
    }, [members]);

    const setOption = (value) => {
        currentElemRef.current.setOption(value);
    };

    const setUserCallBack = (user) => {
        setSelectedUser(user);
    };

    return (
        <Ul>
            {_members.map((member, index) => (
                <li key={index}>
                    <FlexSpaceBetween customProps="">
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
                                        openDropCallBack={openDropCallBack}
                                        setRef={setRef}
                                        ref={currentElemRef}
                                        setPositionCallBack={
                                            setPositionDropDown
                                        }
                                        setUserCallBack={setUserCallBack}
                                    />
                                )}
                            </UpdateMemberRoleMutation>
                        </Div>
                    </FlexSpaceBetween>
                </li>
            ))}
            {ReactDom.createPortal(
                <RemoveMemberMutation>
                    {({ doRemoveMember }) => (
                        <RoleDropDown
                            setOption={setOption}
                            doRemoveMember={doRemoveMember}
                            userId={selectedUser}
                        />
                    )}
                </RemoveMemberMutation>,
                document.getElementById('dropwdown-app')
            )}
        </Ul>
    );
};

const InvitationList = ({ members }) => {
    const [selectedUser, setSelectedUser] = useState();
    const {
        setRef,
        currentElemRef,
        setPositionDropDown,
        openDropCallBack,
    } = useDropdown();

    const setUserCallBack = (user) => {
        setSelectedUser(user);
    };

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
                            <InvitationSelect
                                color={Colors.yellow}
                                ref={currentElemRef}
                                setRef={setRef}
                                setPositionCallBack={setPositionDropDown}
                                openDropCallBack={openDropCallBack}
                                setUserCallBack={setUserCallBack}
                                userId={member._id}
                            />
                        </Div>
                    </FlexSpaceBetween>
                </li>
            ))}
            {ReactDom.createPortal(
                <RemoveInvitationMutation>
                    {({ doRemoveInvitation }) => (
                        <InvitationDropDown
                            userId={selectedUser}
                            doRemoveInvitation={doRemoveInvitation}
                        />
                    )}
                </RemoveInvitationMutation>,
                document.getElementById('dropwdown-app')
            )}
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
    }, [currentProject.members]);

    return (
        <Modal
            ref={modalRef}
            title={`${currentProject ? `${currentProject.name}:` : ''} Members`}
        >
            <Subtitle>Current members of the project</Subtitle>
            <Div customProps="max-height: 220px; overflow-y: auto;">
                <DropdownContextProvider>
                    {handleMembersList()}
                </DropdownContextProvider>
                <Hr />
                <Div customProps="margin-top:0.5em;">
                    <GetInvitationsForProjectQuery
                        projectId={currentProject._id}
                    >
                        {({ data }) => {
                            const {
                                getInvitationsForProject: invitations,
                            } = data;
                            return (
                                <DropdownContextProvider>
                                    <InvitationList members={invitations} />
                                </DropdownContextProvider>
                            );
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
    members: PropTypes.array,
};

MembersList.propTypes = {
    members: PropTypes.array,
};
